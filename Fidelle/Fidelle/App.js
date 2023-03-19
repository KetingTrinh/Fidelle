import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import Game from './screens/Game';
import StoryMode from './screens/StoryMode';
import Popup from './screens/Popup';
import ChapterOne from './screens/ChapterOne';

import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Sperm from './components/Sperm';
import Obstacles from './components/Obstacles';



function Landing() {
  return(
    <View style = {styles.container}>
      <Text style= {styles.text}>HOME!</Text>
    </View>
  );
}

const Stack = createStackNavigator();
console.log("you is here")

export default function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options= {{headerShown: false}} name="Home" component = {Home} />
      <Stack.Screen options= {{headerShown: false}} name="Chapter One" component = {ChapterOne} />
      <Stack.Screen options= {{headerShown: false}} name="Popup" component = {Popup} />
      <Stack.Screen options= {{headerShown: false}} name="Game" component = {Game} />
      <Stack.Screen options= {{headerShown: false}} name="Story Mode" component = {StoryMode} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize: 40,
  },
});
