import React, { useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { styles } from './Login.styles';
import { AUTH_ROUTES } from '@/src/nav/auth/types';
import { Header } from '@/src/components/header/Header';
import { Footer } from '@/src/components/footer/Footer';
import { LoginFormInputs, loginSchema, LoginScreenNavigationProp } from './Login.types';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/src/components/button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback(async (data: LoginFormInputs) => {
    try {
        // I'd put backend API call here to authenticate the user
        // For now, I'll just set isLoggedIn to true in AsyncStorage
        
        await AsyncStorage.setItem('isLoggedIn', 'true');
  
        navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: AUTH_ROUTES.LOGGED_IN }],
            })
          );
      } catch (error) {
        console.error("Error setting isLoggedIn in AsyncStorage:", error);
      }
  }, [navigation]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
        <View style={styles.backButton}>
            <Button text="Go back" onPress={goBack} />
        </View>

        <Header screenName="Log In Screen" />
      
      <View style={styles.container}>
        
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Enter your email"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      </View>

      <View style={[styles.inputContainer, styles.passwordGap]}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.password && styles.inputError]}
              placeholder="Enter your password"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      </View>

      <View style={styles.buttonContainer}>
        <Button text="Sign In" onPress={handleSubmit(onSubmit)} />
      </View>
    

      </View>
      
      <Footer />
    </View>
  );
};

export default LoginScreen;
