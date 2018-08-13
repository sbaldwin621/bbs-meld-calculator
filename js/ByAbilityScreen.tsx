import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationScreenProps, NavigationScreenConfigProps } from 'react-navigation';
import RNPickerSelect from 'react-native-picker-select';

import { Character, Command } from './data/commands';
import { Ability, abilities } from './data/abilities';

type ByAbilityScreenProps = NavigationScreenProps<{
  character: Character
}>

interface ByAbilityScreenState {
  ability: Ability | null
}

export default class ByAbilityScreen extends React.Component<ByAbilityScreenProps, ByAbilityScreenState> {
  static navigationOptions = (props: NavigationScreenConfigProps) => ({
    title: props.navigation.getParam('character')
  });

  constructor(props: ByAbilityScreenProps) {
    super(props);

    this.state = {ability: null};
  }

  private _onPickerChange(ability: Ability) {
    this.setState({...this.state, ability});
  }

  render() {
    const {ability} = this.state;
    
    const crystal = (() => {
      const matchingAbility = abilities.find(a => a.key == ability);
      return matchingAbility != null ? matchingAbility.crystal : null;
    })();

    const pickerItems = abilities.map(a => ({label: a.key, value: a.key}));

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <RNPickerSelect
          items={pickerItems}
          placeholder={{label: 'Select an ability...'}}
          onValueChange={(value) => this._onPickerChange(value)}
          value={ability}
          style={{...pickerStyles}}
          />
        <View style={{flex: 1}}>
        {ability != null ? (
          <Text>{crystal}</Text>
        ) : null}
        </View>
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

