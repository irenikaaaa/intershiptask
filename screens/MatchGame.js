import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MatchGame = ({ route }) => {
  const navigation = useNavigation(); 

  const firstPlayer = route?.params?.firstPlayer || 'player';
  const [totalMatches, setTotalMatches] = useState(25);
  const [playerMatches, setPlayerMatches] = useState(0);
  const [computerMatches, setComputerMatches] = useState(0);
  const [message, setMessage] = useState('');
  const [isPlayerTurn, setIsPlayerTurn] = useState(firstPlayer === 'player');
  const [winnerMessage, setWinnerMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!isPlayerTurn && totalMatches > 0 && !gameOver) {
      const timer = setTimeout(computerMove, 1000);
      return () => clearTimeout(timer);
    }
  }, [isPlayerTurn, totalMatches, gameOver]);


  //End of the game and display of results
  useEffect(() => {
    if (totalMatches <= 0) {
      setGameOver(true);

      let winnerMessage = '';
      if ((playerMatches % 2 === 0) && (computerMatches % 2 !== 0)) {
        winnerMessage = '🎉 You win! You have the even amount of matches!';
      } else if ((playerMatches % 2 !== 0) && (computerMatches % 2 === 0)) {
        winnerMessage = '🤖 Computer wins! It has the even amount of matches!';
      } else {
        winnerMessage = '😐 It\'s a draw! Both have the even amount of matches.';
      }

      navigation.navigate('ResultScreen', {
        playerMatches: playerMatches,
        computerMatches: computerMatches,
        winnerMessage: winnerMessage,
      });
    }
  }, [totalMatches]);


  //PlayerMove
  const playerMove = (matches) => {
    if (totalMatches >= matches) {
      const newTotalMatches = totalMatches - matches;
      setTotalMatches(newTotalMatches);
      setPlayerMatches(playerMatches + matches);
      
      setMessage(
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#fcfafa',fontSize: 20  }}>😎 You took </Text>
          <Text style={{ color: '#FFA500', fontWeight: 'bold' ,fontSize: 24 }}>
            {matches} match{matches > 1 ? 'es' : ''}
          </Text>
        </View>
      );
      
      if (!gameOver) {
        setIsPlayerTurn(false);
      }
    } else {
      setMessage('‼️ Not enough matches left. Please take fewer matches. ‼️');
    }
  };


  //ComputerMove
  const computerMove = () => {
    const matchesToTake = optimalMove();
    const newTotalMatches = totalMatches - matchesToTake;
    setTotalMatches(newTotalMatches);
    setComputerMatches(computerMatches + matchesToTake);
    
    setMessage(
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: '#fcfafa' ,fontSize: 20 }}>🤖 Computer took </Text>
        <Text style={{ color: '#d91e14', fontWeight: 'bold', fontSize: 24  }}>
          {matchesToTake} match{matchesToTake > 1 ? 'es' : ''}
        </Text>
      </View>
    );

    if (!gameOver) {
      setIsPlayerTurn(true);
    }
  };


  //OptimalMove
  const optimalMove = () => {
    let remainder = totalMatches % 4;
    if (remainder === 0) return 3;
    if (remainder === 3) return 2;
    if (remainder === 2) return 1;
    return 1;
  };


  return (
  //Displaying the number of matches for each player 
    <View style={styles.container}>
      <Text style={styles.titleText}>The number of matches</Text>

      <View style={styles.matchesContainer}>
        <Text style={styles.matchNumber}>{totalMatches}</Text>
      </View>
      <View style={styles.playerSection}>
        <Text style={styles.emoji}>😎</Text>
        <Text style={styles.matchesLabel}>Your matches: </Text>
        <Text style={[styles.matchesValue, styles.playerColor]}>{playerMatches}</Text>
      </View>

      <View style={styles.playerSection}>
        <Text style={styles.emoji}>🤖</Text>
        <Text style={styles.matchesLabel}>Computer's matches: </Text>
        <Text style={[styles.matchesValue, styles.computerColor]}>{computerMatches}</Text>
      </View>

      <Text style={styles.message}>{message}</Text>
      
      {/* Buttons*/ }
      {isPlayerTurn && totalMatches > 0 && !gameOver && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => playerMove(1)}>
            <Text style={styles.buttonText}>Take 1️⃣</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => playerMove(2)}>
            <Text style={styles.buttonText}>Take 2️⃣</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => playerMove(3)}>
            <Text style={styles.buttonText}>Take 3️⃣</Text>
          </TouchableOpacity>
        </View>
      )}

      {gameOver && (
        <View>
          <Text style={styles.gameOverMessage}>{message}</Text>
          <Text style={styles.winnerMessage}>{winnerMessage}</Text>
        </View>
      )}
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
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  matchesContainer: {
    borderWidth: 3,
    borderColor: '#FFA500',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchNumber: {
    color: '#FFA500',
    fontSize: 40,
    fontWeight: 'bold',
  },
  playerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  emoji: {
    fontSize: 40,
    marginRight: 10,
  },
  matchesLabel: {
    color: '#fff',
    fontSize: 20,
  },
  matchesValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  playerColor: {
    color: '#FFA500',
  },
  computerColor: {
    color: '#FF0000',
  },
  message: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 20,
  },
  gameOverMessage: {
    color: '#FF4500',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  winnerMessage: {
    color: '#FFD700',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MatchGame;