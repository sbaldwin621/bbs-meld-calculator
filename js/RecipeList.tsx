import * as React from 'react';
import { View, ViewProps, StyleSheet, Text, FlatList, ListRenderItemInfo } from 'react-native';

import { Recipe } from './data/commands';
import { groups, Crystal } from './data/abilities';

interface RecipeListProps extends ViewProps {
  recipes: Recipe[]
}

export default class RecipeList extends React.Component<RecipeListProps> {
  render() {
    const { recipes } = this.props;
        
    const _renderItem = (info: ListRenderItemInfo<Recipe>) => {
      const { item } = info;
      const group = groups[item.meldGroup];

      return (
        <View style={{padding: 10}}>
          <Text>{item.first} + {item.second} = {item.result} ({item.percentage}%)</Text>
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
    
    return (
      <FlatList
        data={recipes}
        keyExtractor={item => item.first + ':' + item.second + '=' + item.result}
        renderItem={_renderItem}
        style={{width: '100%', flexGrow: 1}}
        />
    );
  }
}