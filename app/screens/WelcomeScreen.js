//
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Slides from 'app/components/Slides';

const SLIDE_DATA = [
  { id: 1, text: 'Welcome to JobApp', color: '#03a9f4' },
  { id: 2, text: 'Use this to get a job', color: '#009688' },
  { id: 3, text: 'Set your location, then swipe away', color: '#03a9f4' },
];

//
class WelcomeScreen extends Component {

  //
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  //
  render() {

    //
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );

  }

}

export default WelcomeScreen;
