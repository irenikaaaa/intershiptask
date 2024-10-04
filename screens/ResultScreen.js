import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FireScreen from './FireScreen';

const ResultScreen = ({ route }) => {
  //playerMatches, computerMatches - the number of matches each player has
  //winnerMessage - announcement of the winners
  const { playerMatches, computerMatches, winnerMessage } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FireScreen />

      <Text style={styles.title}>Game Over 🎮</Text>
      <View style={styles.resultContainer}>
        <View style={styles.border}>
          <Text style={styles.playerText}>
            Your Matches: <Text style={styles.playerResultText}>{playerMatches}</Text>
          </Text>
          <Text style={styles.computerText}>
            Computer's Matches: <Text style={styles.computerResultText}>{computerMatches}</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.winnerMessage}>{winnerMessage}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MenuScreen')}>
        <Text style={styles.buttonText}>Return to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    color: '#FFD700', 
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    zIndex: 1,
  },
  resultContainer: {
    marginVertical: 20,
    zIndex: 1,
    alignItems: 'center',
  },
  border: {
    borderWidth: 2,
    borderColor: '#FFA500', 
    borderRadius: 10, 
    padding: 10, 
    alignItems: 'center', 
  },
  playerText: {
    color: '#fff',
    fontSize: 20,
    
    zIndex: 1,
  },
  playerResultText: {
    color: '#FFA500', 
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 1,
  },
  computerText: {
    color: '#fff', 
    fontSize: 20,
  
    zIndex: 1,
  },
  computerResultText: {
    color: '#FF0000', 
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 1,
  },
  winnerMessage: {
    color: '#fff', 
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    zIndex: 1,
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    zIndex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
