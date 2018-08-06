import * as React from 'react';
import { View, Text, Picker, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';

import { getIngredientsForCharacter, Character, Command, Recipe, getRecipesForIngredient } from './data/commands';

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

    const _renderItem = (info: ListRenderItemInfo<Recipe>) => {
      const { item } = info;
      return (
        <Text>{item.first} + {item.second} = {item.result} ({item.percentage}%)</Text>
      );
    };

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>From Ingredients</Text>
        <RNPickerSelect
          items={pickerItems}
          onValueChange={(value) => this._onPickerChange(value)}
          style={{...pickerStyles}}
          />
        <FlatList
          data={recipes}
          keyExtractor={item => item.first + ':' + item.second + '=' + item.result}
          renderItem={_renderItem}
          style={{width: '100%', flexGrow: 1}}
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