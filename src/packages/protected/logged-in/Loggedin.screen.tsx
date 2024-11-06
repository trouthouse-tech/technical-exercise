import React, { useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@/src/components/header/Header';
import { Controller, useForm } from 'react-hook-form';
import { styles } from './LoggedIn.styles';
import Button from '@/src/components/button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_ROUTES } from '@/src/nav/auth/types';

export const LoggedInScreen: React.FC = () => {
  const navigation = useNavigation();

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    navigation.navigate(AUTH_ROUTES.LOGIN);
  }, [navigation]);

  return (
    <View style={styles.container}>

        <Header title="You are logged in!" />
      
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button text="Log Out" onPress={logout} />
            </View>
        </View>
    </View>
  );
};
