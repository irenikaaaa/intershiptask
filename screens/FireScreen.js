// Background of fire emojis that fall on StartScreen and ResultScreen
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');
const flames = new Array(70).fill(null);


const FireScreen = () => {
  return (
    <View style={styles.container}>
      {flames.map((_, index) => (
        <Animatable.Text
          key={index}
          animation={{
            0: { translateY: -100, opacity: 0.5 },
            1: { translateY: height + 50, opacity: 0 },
          }}
          iterationCount="infinite"
          duration={Math.random() * 5000 + 7000}
          delay={Math.random() * 1000}
          style={[styles.flame, { left: Math.random() * width }]}
        >
          🔥
        </Animatable.Text>
      ),)}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  flame: {
    position: 'absolute',
    fontSize: 20,
    top: -50,
    opacity: 0.5,
  },
});


export default FireScreen;
