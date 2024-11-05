import React, { useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@/src/components/header/Header';
import { Controller, useForm } from 'react-hook-form';
import { styles } from './LoggedIn.styles';
import Button from '@/src/components/button/Button';

export const LoggedInScreen: React.FC = () => {
  const navigation = useNavigation();

  const logout = useCallback(() => {
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
