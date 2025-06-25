import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import React, { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import { AppNavigator } from '~/app/navigation/App';

export const App: React.FC = () => {
  const [isNavigatorReady, setNavigatorReady] = useState(false);

  /* For other google fonts use https://github.com/expo/google-fonts as well */
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Bold': Poppins_700Bold,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
  });

  useEffect(() => {
    if (fontsLoaded && isNavigatorReady) {
      RNBootSplash.hide().catch(() => null);
    }
  }, [fontsLoaded, isNavigatorReady]);

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigator onReady={() => setNavigatorReady(true)} />;
};
