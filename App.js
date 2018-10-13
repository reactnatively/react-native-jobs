//
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

//
import AuthScreen from 'app/screens/AuthScreen';
import WelcomeScreen from 'app/screens/WelcomeScreen';

//
class App extends React.Component {

  //
  render() {

    //
    const MainNavigator = createBottomTabNavigator({
        Welcome: { screen: WelcomeScreen },
        Auth: { screen: AuthScreen },
    });

    //
    return (
      <MainNavigator />
    );

  }

}

export default App;
