import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '../auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStack } from '../main';

const RootStack = () => {
  const [initialRoute, setInitialRoute] = React.useState<React.ReactNode>(null);

  React.useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');

        if (isLoggedIn === 'true') {
          setTimeout(() => {
            setInitialRoute(<MainStack />);
          }, 3000);
        } else {
          setInitialRoute(<AuthStack />);
        }
      } catch (error) {
        setInitialRoute(<AuthStack />);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer>
      {initialRoute}
    </NavigationContainer>
  );
};

export default RootStack;
