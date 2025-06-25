import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { AuthScreen } from '~/screens/auth';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

export type AuthStackParamList = {
  AuthScreen: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>;

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen component={AuthScreen} name="AuthScreen" />
    </AuthStack.Navigator>
  );
};
