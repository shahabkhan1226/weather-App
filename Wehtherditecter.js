import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const Wehtherditecter = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async city => {
    const apiKey = '457888ba1815dcccfe4e21c8a2353fb3';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
    );
    if (!response.ok) throw new Error('City not found');
    return await response.json();
  };

  const handleSend = async () => {
    if (city.trim().length === 0) {
      alert('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(city);
      navigation.navigate('wether', { weatherData: data });
    } catch (error) {
      console.error(error);
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('../../src/Assets/img.png')}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" backgroundColor="white" hidden={false} />
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Weather App</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter city name"
            value={city}
            onChangeText={text => setCity(text)}
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            style={[styles.button, loading && { backgroundColor: '#ccc' }]}
            onPress={handleSend}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Get Weather</Text>
            )}
          </TouchableOpacity>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Wehtherditecter;
