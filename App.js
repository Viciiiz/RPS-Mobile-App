import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PlayScreen from './app/screens/PlayScreen';
import ResultScreen from './app/screens/ResultScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}/>
          <Stack.Screen
            name="Play"
            component={PlayScreen}/>
          <Stack.Screen
            name="Result"
            component={ResultScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;