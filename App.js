
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Wehtherditecter from './src/js/Wehtherditecter';
import SplashScreen from './src/js/SplashScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import wether from './src/js/wether';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="wehtherditecter" component={Wehtherditecter}   options={{ headerShown: false }} />
        <Stack.Screen name="wether" component={wether}   options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
