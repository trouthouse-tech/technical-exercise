import { LoggedInScreen } from '@/src/packages/protected/logged-in';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AUTH_ROUTES } from '../auth/types';

const Stack = createStackNavigator();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AUTH_ROUTES.LOGGED_IN} component={LoggedInScreen} options={{ gestureEnabled: false, headerShown: false }} />
    </Stack.Navigator>
  );
};
