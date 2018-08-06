import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Screen } from './navigation';
import { Character } from './data/commands';

export interface CharacterScreenParams {
  character: Character
}

export default class CharacterScreen extends React.Component<NavigationScreenProps<CharacterScreenParams>> {
  render() {
    const character = this.props.navigation.getParam('character');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{character}</Text>
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