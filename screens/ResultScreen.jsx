import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import IntroScreen1 from './IntroScreen1';

import { weights, getUserAnswers } from '@/app/update';

const calculateScore = (userAnswers) => {
  score = 0;
  atr = 0
  userAnswers.forEach(element => {
    score += weights[atr][element]
    console.log(score, element)
    atr += 1
  });
  return score;
};

const getAllocation = (score) => {
  console.log(score)
  if (score >= 0.8) return "100% מניות";
  if (score >= 0.6) return "75% מניות";
  if (score >= 0.4) return "50% מניות";
  if (score >= 0.2) return "25% מניות";
  return "0% מניות";
};

const ResultScreen = () => {
  // const route = useRoute();
  // const { userAnswers } = route.params;
  const score = calculateScore(getUserAnswers());
  const allocation = getAllocation(score);
  const navigation = useNavigation();

  const reset = () => {
    navigation.navigate(IntroScreen1); // Navigate back to the first intro screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>הציון שלך הוא: {score.toLocaleString()}</Text>
      <Text style={styles.allocation}>הקצאת הנכסים המומלצת:</Text>
      <Text style={styles.result}>{allocation}</Text>
      {/* <View style={styles.resetButton}>
        <Button title="reset" onPress={reset} toPress="0"/>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  score: {
    fontSize: 34,
  },
  allocation: {
    fontSize: 31,
  },
  resetButton: {
    height: '10%',
    backgroundColor: 'black'
  },
  result: {
    fontSize: 39,
    fontWeight: 'bold',
  },
});

export default ResultScreen;