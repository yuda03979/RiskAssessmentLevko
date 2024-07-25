import React, { useEffect } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';


const IntroScreen1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Intro2');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground source={require('../assets/intro_image1.png')} style={styles.image}>
      <View style={styles.container}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen1;