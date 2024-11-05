import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WelcomeScreenNavigationProp } from './Welcome.types';
import { styles } from './Welcome.styles';
import { AUTH_ROUTES } from '@/src/nav/auth/types';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const goToLoginScreen = useCallback(() => {
    navigation.navigate(AUTH_ROUTES.LOGIN);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
            Welcome to the <Text style={styles.highlight}>Pencil Bible</Text>
        </Text>
        <Text style={styles.subtitle}>Technical Exercise</Text>
    </View>
      
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
      
      <Text style={styles.footer}>Pencil Bible Inc</Text>
    </View>
  );
};

export default WelcomeScreen;
