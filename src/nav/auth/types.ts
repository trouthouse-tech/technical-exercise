import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export enum AUTH_ROUTES {
  WELCOME = 'WELCOME',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  LOGGED_IN = 'LOGGED_IN',
}

export type AuthStackParamList = {
  [AUTH_ROUTES.WELCOME]: undefined;
  [AUTH_ROUTES.LOGIN]: undefined;
  [AUTH_ROUTES.SIGNUP]: undefined;
  [AUTH_ROUTES.LOGGED_IN]: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<AuthStackParamList, AUTH_ROUTES.WELCOME>;
export type AuthNavigationRoute = RouteProp<AuthStackParamList, AUTH_ROUTES.WELCOME>;
