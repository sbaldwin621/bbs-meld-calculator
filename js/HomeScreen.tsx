import * as React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Screen } from './navigation';
import { Character } from './data/commands';

export default class HomeScreen extends React.Component<NavigationScreenProps<{}>> {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View>
        <Header title="Terra" />
        <NavButton text="By Command" onPress={() => this.props.navigation.navigate(Screen.ByCommand, {character: Character.Terra})} />
        <Separator />
        <NavButton text="By Ability" onPress={() => this.props.navigation.navigate(Screen.ByAbility, {character: Character.Terra})} />

        <Header title="Ventus" />
        <NavButton text="By Command" onPress={() => this.props.navigation.navigate(Screen.ByCommand, {character: Character.Ventus})} />
        <Separator />
        <NavButton text="By Ability" onPress={() => this.props.navigation.navigate(Screen.ByAbility, {character: Character.Ventus})} />

        <Header title="Aqua" />
        <NavButton text="By Command" onPress={() => this.props.navigation.navigate(Screen.ByCommand, {character: Character.Aqua})} />
        <Separator />
        <NavButton text="By Ability" onPress={() => this.props.navigation.navigate(Screen.ByAbility, {character: Character.Aqua})} />
      </View>
    );
  }
}

const Header = (props: {title: string}) => (
  <View style={{padding: 10}}><Text>{props.title}</Text></View>
);

const NavButton = (props: {text: string, onPress: () => void}) => (
  <TouchableHighlight style={{padding: 15, backgroundColor: 'white'}} underlayColor="#c9c9c9" delayPressOut={1000} onPress={props.onPress}>
    <Text>{props.text}</Text>
  </TouchableHighlight>
);

const Separator = () => (
  <View style={{alignSelf: 'center', height: 1}} />
)