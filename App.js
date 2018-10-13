//
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//
import AuthScreen from 'app/screens/AuthScreen';
import WelcomeScreen from 'app/screens/WelcomeScreen';
import DeckScreen from 'app/screens/DeckScreen';
import MapScreen from 'app/screens/MapScreen';
import ReviewScreen from 'app/screens/ReviewScreen';
import SettingsScreen from 'app/screens/SettingsScreen';

//
class App extends React.Component {

  //
  render() {

    //
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen },
            })
          }
        })
      }
    });

    //
    return (
      <MainNavigator />
    );

  }

}

export default App;
