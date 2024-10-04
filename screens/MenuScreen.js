import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const [firstPlayer, setFirstPlayer] = useState(null); 
  const [pressedButton, setPressedButton] = useState(null); 

  const startGame = () => {
    if (firstPlayer) {
      navigation.navigate('MatchGame', { firstPlayer }); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Game Rules</Text>
      <Text style={styles.rulesText}>
        Two people are playing a game. From the pile of 25 matches, each player takes either 1, 2, or 3
        matches on each turn. The game is over once all matches are taken. Whoever has an even amount of matches wins.
      </Text>

      <Text style={styles.choosePlayerText}>Who goes first?</Text>
      <View style={styles.playerSelection}>
        <TouchableOpacity
          style={[styles.playerButton, firstPlayer === 'player' && styles.selectedButton, pressedButton === 'player' && styles.pressedButton]}
          onPress={() => {
            setFirstPlayer('player');
            setPressedButton('player');
          }}
          onPressOut={() => setPressedButton(null)}>
          <Text style={styles.playerButtonText}>😎 Human</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.playerButton, firstPlayer === 'robot' && styles.selectedButton, pressedButton === 'robot' && styles.pressedButton]}
          onPress={() => {
            setFirstPlayer('robot');
            setPressedButton('robot');
          }}
          onPressOut={() => setPressedButton(null)}>
          <Text style={styles.playerButtonText}>🤖 Robot</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.startButton, !firstPlayer && styles.disabledButton]} 
        onPress={startGame} 
        disabled={!firstPlayer}>
        <Text style={styles.startButtonText}>Start Game</Text>
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
  titleText: {
    color: '#f39c12',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  rulesText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
   
  },
  choosePlayerText: {
    color: '#f39c12',
    fontSize: 24,
    marginBottom: 20,
  },
  playerSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  playerButton: {
    backgroundColor: '#444',
    borderRadius: 15,
    padding: 15,
    width: '40%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#f39c12', //Orange 
  },
  pressedButton: {
    backgroundColor: '#b8b19e', 
  },
  playerButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#f39c12',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    width: '70%',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#888', 
  },
});

export default MenuScreen;
