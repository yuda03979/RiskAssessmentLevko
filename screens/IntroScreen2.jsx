import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { View, Text, StyleSheet, Image, Dimensions,  ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');


const IntroScreen2 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/intro_image2.png')} style={styles.image}>
      <View style={styles.container}></View>
      <View><Button title="אני מאשר" onPress={() => navigation.navigate('Questionnaire')} /></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen2;