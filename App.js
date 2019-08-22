import React, { Component } from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Albums/HomeScreen';
import ImagesScreen from './src/screens/Images/ImagesScreen';


const AppNavigator = createStackNavigator({

  Home: HomeScreen,
  Images: ImagesScreen,

}, {
    initialRouteName: 'Home',
});


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
