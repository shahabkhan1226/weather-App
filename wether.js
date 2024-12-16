import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Wether = ({ route, navigation }) => {
  const { weatherData } = route.params;

  return (
    <ImageBackground
      source={require('../../src/Assets/img.png')}
      style={styles.background}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* Alternative Image for Back Button */}
          <Image
            source={require('../../src/Assets/arrow1.png')} // Replace with your custom back arrow image path
            style={styles.backButtonImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Weather Details</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.cityText}>{`City: ${weatherData.name}`}</Text>
        <Text style={styles.detailText}>
          {`Temperature: ${weatherData.main.temp}°C`}
        </Text>
        <Text style={styles.detailText}>
          {`Weather: ${weatherData.weather[0].description}`}
        </Text>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
          }}
          style={styles.weatherIcon}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonImage: {
    width: 30, // Set the width for the back arrow image
    height: 30, // Set the height for the back arrow image
    // tintColor: 'white', // Optional: Add a tint to match the theme
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  cityText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default Wether;
