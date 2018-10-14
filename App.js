//
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
//
import store from 'app/store';

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
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
