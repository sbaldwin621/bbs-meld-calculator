import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Screen } from './navigation';
import { Character } from './data/commands';

export default class HomeScreen extends React.Component<NavigationScreenProps<{}>> {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Select Character</Text>
        <Button
          title="Terra"
          onPress={() => this.props.navigation.navigate(Screen.Character, {
            character: Character.Terra
          })}
          />
        <Button
          title="Ventus"
          onPress={() => this.props.navigation.navigate(Screen.Character, {
            character: Character.Ventus
          })}
          />
        <Button
          title="Aqua"
          onPress={() => this.props.navigation.navigate(Screen.Character, {
            character: Character.Aqua
          })}
          />
      </View>
    );
  }
}