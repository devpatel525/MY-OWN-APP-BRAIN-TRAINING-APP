import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import LoginScreen from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import Funny from './screens/Funny';
import Math from './screens/Math';
import Nature from './screens/Nature';
import Science from './screens/Science';
import Code from './screens/code'



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
//TabNavigator:{screen: TabNavigator}
})
var AppNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  HomeScreen: HomeScreen,
  Science: Science,
  Math: Math,
  Funny: Funny,
  Nature:Nature,
  Code:Code,
});



const AppContainer =  createAppContainer(AppNavigator);
//const AppContainer = createAppContainer(AppNavigator);

