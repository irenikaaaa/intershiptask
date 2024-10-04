import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FireScreen from './FireScreen'; 

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FireScreen />
      <Text style={styles.titleText}>Match Game</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('MenuScreen')}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: '100%', 
  },
  titleText: {
    color: '#fff', 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    zIndex: 1, 
  },
  buttonContainer: {
    backgroundColor: '#f39c12', 
    borderRadius: 15, 
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    zIndex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18, 
    fontWeight: 'bold', 
  },
});

export default StartScreen;
