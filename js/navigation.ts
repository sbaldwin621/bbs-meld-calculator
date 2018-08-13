import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import ByCommandScreen from './ByCommandScreen';
import ByAbilityScreen from './ByAbilityScreen';

export enum Screen {
  Home = 'Home',
  ByCommand = 'ByCommand',
  ByAbility = 'ByAbility'
}

export default createStackNavigator({
  [Screen.Home]: {
    screen: HomeScreen
  },
  [Screen.ByCommand]: {
    screen: ByCommandScreen
  },
  [Screen.ByAbility]: {
    screen: ByAbilityScreen
  }
}, {
  initialRouteName: Screen.Home
})
