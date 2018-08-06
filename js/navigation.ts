import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import RecipeScreen from './RecipeScreen';

export enum Screen {
  Home = 'Home',
  Recipe = 'Recipe'
}

export default createStackNavigator({
  [Screen.Home]: {
    screen: HomeScreen
  },
  [Screen.Recipe]: {
    screen: RecipeScreen
  }
}, {
  initialRouteName: Screen.Home
})
