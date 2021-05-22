import { StatusBar } from 'expo-status-bar';
import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import ListScreen from './screens/ListScreen'
import MoneyScreen from './screens/MoneyScreen'
import ClothesScreen from './screens/ClothesScreen'
import FoodScreen from './screens/FoodScreen'
import TotalListScreen from './screens/TotalListScreen';

export default function App() {
  return (
    <AppContainer />
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  ListScreen:{screen: ListScreen},
  ClothesScreen:{screen:ClothesScreen},
  MoneyScreen:{screen:MoneyScreen},
  FoodScreen:{screen:FoodScreen},
  TotalListScreen:{screen:TotalListScreen}

})

const AppContainer =  createAppContainer(switchNavigator);