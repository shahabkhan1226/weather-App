import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('wehtherditecter'); // Use the corrected screen name here
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../src/Assets/img.png')} 
      style={styles.background} 
    >
      <View style={styles.container}>
        <Text style={styles.text}>WEATHER APP</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop:40
  },
  text: {
    fontSize: 38,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default SplashScreen;
