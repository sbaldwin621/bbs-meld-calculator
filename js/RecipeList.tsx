import * as React from 'react';
import { View, ViewProps, StyleSheet, Button, Text, SectionList, ListRenderItemInfo, SectionListData, TouchableOpacity, PickerIOSItem } from 'react-native';
import { sortBy } from 'lodash';

import { Recipe, Command, getRecipesForIngredient, Character, getRecipesForResult } from './data/commands';
import { groups, Crystal } from './data/abilities';

interface RecipeListProps extends ViewProps {
  character: Character,
  command: Command | null,
  onPressCommand: (command: Command) => void
}

export default class RecipeList extends React.Component<RecipeListProps> {
  static getDerivedStateFromProps(props: RecipeListProps) {
    const { command, character } = props;
    
    const meldFromRecipes = command != null ? getRecipesForResult(character, command) : [];
    const meldToRecipes = command != null ? getRecipesForIngredient(character, command) : [];

    return {meldFromRecipes, meldToRecipes};
  }

  constructor(props: RecipeListProps) {    
    super(props);

    this.state = {meldFromRecipes: [], meldToRecipes: []};
  }

  render() {
    const { character, command, onPressCommand } = this.props;      
    const meldFromRecipes = command != null ? getRecipesForResult(character, command) : [];
    const meldToRecipes = command != null ? getRecipesForIngredient(character, command) : [];

    const _renderItem = (info: ListRenderItemInfo<Recipe>) => {
      const { item } = info;
      const group = groups[item.meldGroup];

      return (
        <View style={{padding: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CommandButton command={item.first} onPressCommand={onPressCommand} />
            <Text> + </Text>
            <CommandButton command={item.second} onPressCommand={onPressCommand} />
            <Text> = </Text>
            <CommandButton command={item.command} onPressCommand={onPressCommand} />
          </View>
          {item.upgrade != null ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Rare Upgrade ({item.upgrade.percentage}%) - </Text>
              <CommandButton command={item.upgrade.command} onPressCommand={onPressCommand} />
            </View>
          ) : null}
          <View>
            <View><Text>Shimmering - {group[Crystal.Shimmering]}</Text></View>
            <View><Text>Fleeting - {group[Crystal.Fleeting]}</Text></View>
            <View><Text>Pulsing - {group[Crystal.Pulsing]}</Text></View>
            <View><Text>Wellspring - {group[Crystal.Wellspring]}</Text></View>
            <View><Text>Soothing - {group[Crystal.Soothing]}</Text></View>
            <View><Text>Hungry - {group[Crystal.Hungry]}</Text></View>
            <View><Text>Abounding - {group[Crystal.Abounding]}</Text></View>
          </View>
        </View>
      );
    };

    const _renderSectionHeader = (info: {section: SectionListData<any>}) => {
      return info.section.data.length > 0 ? (
        
        <View style={{padding: 10, backgroundColor: 'black'}}>
          <Text style={{color: 'white'}}>{info.section.title}</Text>
        </View>
      ) : null;
    }
    
    return (
      <SectionList
        key={command || undefined} // Remount when command is changed to instantly "scroll to top"
        sections={[
          {title: 'Result of...', data: meldFromRecipes},
          {title: 'Ingredient in...', data: meldToRecipes}
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
        renderSectionHeader={_renderSectionHeader}
        style={{width: '100%', flexGrow: 1}}
        />
    );
  }
}

const CommandButton = (props: {command: Command, onPressCommand: (c: Command) => void}) => (
  <TouchableOpacity
    onPress={() => props.onPressCommand(props.command)}
    >
    <Text style={{color: 'blue'}}>{props.command}</Text>
  </TouchableOpacity>
);