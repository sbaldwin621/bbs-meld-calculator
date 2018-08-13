import * as React from 'react';
import { View, Text, Picker, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationScreenProps, NavigationScreenConfigProps } from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';

import { getCommandsForCharacter, Character, Command, Recipe, getRecipesForIngredient, getRecipesForResult } from './data/commands';
import RecipeList from './RecipeList';

type ByCommandScreenProps = NavigationScreenProps<{
  character: Character
}>;

interface ByCommandScreenState {
  pickerItems: {label: string, value: Command}[],
  command: Command | null
}

export default class ByCommandScreen extends React.Component<ByCommandScreenProps, ByCommandScreenState> {
  static navigationOptions = (props: NavigationScreenConfigProps) => ({
    title: props.navigation.getParam('character')
  })

  constructor(props: ByCommandScreenProps, state: {}) {
    super(props, state);
    
    const character = this.props.navigation.getParam('character');
    const ingredients = getCommandsForCharacter(character);
    const pickerItems = ingredients.map(i => ({label: i, value: i}));

    this.state = {pickerItems, command: null};
  }

  private _onPickerChange(command: Command) {
    const character = this.props.navigation.getParam('character');
    const meldToRecipes = getRecipesForIngredient(character, command);
    const meldFromRecipes = getRecipesForResult(character, command);
    this.setState({...this.state, command});
  }

  private _onPressCommand(command: Command) {
    this._onPickerChange(command);
  }

  render() {
    const character = this.props.navigation.getParam('character');
    const {pickerItems, command} = this.state;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <RNPickerSelect
          items={pickerItems}
          placeholder={{label: 'Select a command...'}}
          onValueChange={(value) => this._onPickerChange(value)}
          value={command}
          style={{...pickerStyles}}
          />
        <RecipeList
          style={{width: '100%', flex: 1}}
          character={character}
          command={command}
          onPressCommand={command => this._onPressCommand(command)}
          />
      </View>
    );
  }
}

const pickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  }
});