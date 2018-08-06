import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProps, NavigationScreenConfigProps } from 'react-navigation';

import { Screen } from './navigation';
import { Character } from './data/commands';

export interface CharacterScreenParams {
  character: Character
}

export default class CharacterScreen extends React.Component<NavigationScreenProps<CharacterScreenParams>> {
  static navigationOptions = (props: NavigationScreenConfigProps) => ({
    title: props.navigation.getParam('character')
  })

  render() {
    const character = this.props.navigation.getParam('character');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title='By Ingredient'
          onPress={() => this.props.navigation.navigate(Screen.ByIngredient, {
            character
          })}
          />
      </View>
    )
  }
}