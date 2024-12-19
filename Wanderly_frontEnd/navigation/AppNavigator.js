import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import TabNavigator from './TabNavigator';
import SplashScreen from '../pages/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Sliding transition
        cardStyle: {
          contentStyle: { backgroundColor: "#000000" },
        },
      }}
    >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Registration" component={RegistrationPage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="TabNavigate" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
