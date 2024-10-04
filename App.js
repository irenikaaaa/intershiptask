/*
  THE TOUR OF THE SCREENS
  StartScreen - the initial screen with the "PLAY" button;
  MenuScreen - the screen with the rules of the game and the opportunity to choose, 
  who will go first(Human or Compiter) and the "Sart Game" button;
  MatchScreen - the logic of the game; 
  ResultScreen - displaying the results of the game;
  FireScreen - falling fire emojis on the background.
*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import MenuScreen from './screens/MenuScreen'; 
import MatchGame from './screens/MatchGame'; 
import ResultScreen from './screens/ResultScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MatchGame" component={MatchGame} options={{ headerShown: false }} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
