import React from 'react';
import { Dimensions, ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen1 from '../screens/IntroScreen1';
import IntroScreen2 from '../screens/IntroScreen2';
import QuestionnaireScreen from '../screens/QuestionnaireScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Intro1" >
        <Stack.Screen name="Intro1" component={IntroScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="Intro2" component={IntroScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
