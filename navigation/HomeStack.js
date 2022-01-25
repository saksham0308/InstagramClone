import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
// import NewPostScreen from '..//screens/NewPostScreen'
import NewPostScreen from '../screens/NewPostScreen';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
    </Stack.Navigator>
  );
}
