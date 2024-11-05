import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WelcomeScreenNavigationProp } from './Welcome.types';
import { styles } from './Welcome.styles';
import { AUTH_ROUTES } from '@/src/nav/auth/types';
import { Header } from '@/src/components/header/Header';
import { Footer } from '@/src/components/footer/Footer';

export const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const goToLoginScreen = useCallback(() => {
    navigation.navigate(AUTH_ROUTES.LOGIN);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Header screenName="Technical Exercise" />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
        //   onPress={goToLoginSignupScreen} // This is a placeholder for the next screen
          accessibilityLabel="Sign Up"
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={goToLoginScreen}
          accessibilityLabel="Sign In"
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      
      <Footer />
    </View>
  );
};
