import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Animated } from 'react-native';
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';
import domino from './assets/domino.png'

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const App = () => {
  const [diceImage, setDiceImage] = useState(dice1);
  const rotateAnim = new Animated.Value(0);

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let newDiceImage;

    switch (randomNumber) {
      case 1:
        newDiceImage = dice1;
        break;
      case 2:
        newDiceImage = dice2;
        break;
      case 3:
        newDiceImage = dice3;
        break;
      case 4:
        newDiceImage = dice4;
        break;
      case 5:
        newDiceImage = dice5;
        break;
      case 6:
        newDiceImage = dice6;
        break;
      default:
        newDiceImage = domino;
    }

    setDiceImage(newDiceImage);

    // Animation for dice roll
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
    });
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={diceImage}
        style={[styles.dice, animatedStyle]}
      />
      <Pressable onPress={rollDice} style={styles.rollDiceBtn}>
        <Text style={styles.rollDiceBtnTxt}>Roll the Dice!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dice: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  rollDiceBtn: {
    backgroundColor: '#61dafb',
    borderRadius: 5,
    padding: 10,
  },
  rollDiceBtnTxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
