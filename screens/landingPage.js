//LandingPage
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cart Icon */}
      <Image
        source={require('../assets/logo.png')} 
        style={styles.cartImage}
      />

      {/* App Name */}
      <Text style={styles.appTitle}>EasyCart</Text>
      
      {/* Tagline */}
      <Text style={styles.tagline}>
        <Text style={styles.taglineBold}>faster</Text> services
      </Text>

      {/* Start Button */}
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f2e8', 
  },
  cartImage: {
    width: 220,
    height: 200,
    marginBottom: 0, 
    alignItems: 'center',
    marginLeft: 40
  },
  appTitle: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#3b3b3b', 
    marginBottom: 5,
  },
  tagline: {
    fontSize: 18,
    color: '#4a4a4a',
    marginBottom: 40,
  },
  taglineBold: {
    fontWeight: 'normal',
  },
  startButton: {
    backgroundColor: '#354E16', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    width: '40%',
    alignItems: 'center'
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
