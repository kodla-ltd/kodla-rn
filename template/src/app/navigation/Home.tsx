import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { HomeScreen } from '~/screens/home';

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type HomeStackScreenProps<Screen extends keyof HomeStackParamList> = NativeStackScreenProps<
  HomeStackParamList,
  Screen
>;

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen component={HomeScreen} name="HomeScreen" />
    </HomeStack.Navigator>
  );
};
