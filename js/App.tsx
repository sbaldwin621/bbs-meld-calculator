import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  } 
})

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}