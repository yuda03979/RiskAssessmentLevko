


import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import Row from '../components/Row';
import {questions, answers, updateUserAnswers} from '../app/update'





const QuestionnaireScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(-1));
  const navigation = useNavigation();

  const selectAnswer = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = index;
    setSelectedAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (selectedAnswers[currentQuestion] === -1) {
      alert("אנא בחר תשובה לפני שתמשיך");
      return;
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("tadam!")
      console.log(selectedAnswers)
      updateUserAnswers(selectedAnswers)
      navigation.navigate('Result');
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const createButton = (answer, index) => {
    const isSelected = selectedAnswers[currentQuestion] === index;
    return (
      <Button
        key={index}
        title={answer}
        onPress={() => selectAnswer(index)}
        selected={isSelected}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.QAContainer}>
          <View style={styles.question}>
            <Text style={styles.textQuestion}>{questions[currentQuestion]}</Text>
          </View>
          <View style={styles.answersContainer}>
            <Row>
              {answers[currentQuestion].map(createButton)}
            </Row>
          </View>
        </View>
        <View style={styles.navigation}>
          <Button title="הקודם" onPress={prevQuestion} />
          <Button title="הבא" onPress={nextQuestion} />
        </View>
        <ProgressBar progress={(currentQuestion + 1) / questions.length} style={styles.progressBar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  subContainer: {
    backgroundColor: 'brown',
    width: '90%',
    height: '80%',
    alignSelf: 'center',
  },
  QAContainer: {
    height: '70%',
    backgroundColor: 'red',
  },
  question: {
    height: '50%',
    fontSize: 24,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'green',
  },
  textQuestion: {
    fontSize: 24,
  },
  answersContainer: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '30%',
  },
  progressBar: {},
});

export default QuestionnaireScreen;