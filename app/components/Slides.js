//
import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

//
const SCREEN_WIDTH = Dimensions.get('window').width;

//
class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.id}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={[styles.slideText]}>
            {slide.text}
          </Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  //
  render() {

    //
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );

  }

}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  slideText: {
    fontSize: 30,
    color: '#ffffff',
  },
  buttonStyle: {
    backgroundColor: '#0288d1',
    marginTop: 15,
  },
};

export default Slides;
