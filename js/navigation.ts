import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import CharacterScreen from './CharacterScreen';
import ByIngredientScreen from './ByIngredientScreen';

export enum Screen {
  Home = 'Home',
  Character = 'Character',
  ByIngredient = 'ByIngredient'
}

export default createStackNavigator({
  [Screen.Home]: {
    screen: HomeScreen
  },
  [Screen.Character]: {
    screen: CharacterScreen
  },
  [Screen.ByIngredient]: {
    screen: ByIngredientScreen
  }
}, {
  initialRouteName: Screen.Home
})
