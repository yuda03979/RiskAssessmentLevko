

import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get("screen");

const Button = ({ title, onPress, selected }) => {
  const buttonStyle = selected ? [styles.button, styles.buttonPressed] : styles.button;
  const titleStyle = selected ? [styles.title, styles.selectedTitle] : styles.title;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '25%', // Adjust for margin
    height: '90%', // Adjust for margin
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 0,
  },
  nextPrevButton: {
    height: '50%',
    backgroundColor: 'transparent',
  },
  title: {
    color: '#fff',
    fontSize: 24,
  },
  selectedTitle: {
    color: 'black',
  },
  buttonPressed: {
    backgroundColor: 'yellow',
  }
});

export default Button;