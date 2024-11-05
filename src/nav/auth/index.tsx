import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AUTH_ROUTES, AuthStackParamList } from './types';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from '@/src/packages/auth/login/Login.screen';
import { WelcomeScreen } from '@/src/packages/auth/welcome';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={AUTH_ROUTES.WELCOME}>
        <Screen
          name={AUTH_ROUTES.WELCOME}
          component={WelcomeScreen}
          options={{ gestureEnabled: false }}
        />
        <Screen
          name={AUTH_ROUTES.LOGIN}
          component={LoginScreen}
          options={{ gestureEnabled: false }}
        />
      </Navigator>
    </SafeAreaView>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    color: '#ffffff',
    flex: 1,
  },
});
