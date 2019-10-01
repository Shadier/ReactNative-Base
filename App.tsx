import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './components/HomeScreen'
import CommentsScreen from './components/CommentsScreen'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Comments: {screen: CommentsScreen}},
  {
  defaultNavigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor:'#0087ff'
    }
  }
});

export default  createAppContainer(MainNavigator);


