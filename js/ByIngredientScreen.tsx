import * as React from 'react';
import { View, Text, Picker, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationScreenProps, NavigationScreenConfigProps } from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';

import { getIngredientsForCharacter, Character, Command, Recipe, getRecipesForIngredient } from './data/commands';
import RecipeList from './RecipeList';

export interface ByIngredientParams {
  character: Character
}

type ByIngredientProps = NavigationScreenProps<ByIngredientParams>;

interface ByIngredientState {
  pickerItems: {label: string, value: Command}[],
  selected?: Command,
  recipes: Recipe[]
}

export default class ByIngredientScreen extends React.Component<ByIngredientProps, ByIngredientState> {
  static navigationOptions = (props: NavigationScreenConfigProps) => ({
    title: 'By Ingredient'
  })

  constructor(props: ByIngredientProps, state: {}) {
    super(props, state);
    
    const character = this.props.navigation.getParam('character');
    const ingredients = getIngredientsForCharacter(character);
    const pickerItems = ingredients.map(i => ({label: i, value: i}));

    this.state = {pickerItems, recipes: []};
  }

  private _onPickerChange(command: Command) {
    const recipes = getRecipesForIngredient(this.props.navigation.getParam('character'), command);
    this.setState({...this.state, selected: command, recipes});
  }

  render() {
    const {pickerItems, recipes} = this.state;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <RNPickerSelect
          items={pickerItems}
          placeholder={{label: 'Select a command...'}}
          onValueChange={(value) => this._onPickerChange(value)}
          style={{...pickerStyles}}
          />
        <RecipeList
          style={{width: '100%', flex: 1}}
          recipes={recipes}
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