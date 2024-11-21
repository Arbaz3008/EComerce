import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Login button pressed');
    // Navigate to the Home screen for demo purposes
    navigation.replace('HomeScreen');
  };

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.background}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={(handleLogin)=> navigation.navigate ('HomeScreen') }>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius:20,
  },
  button: {
    backgroundColor: '#E96E6E',
    padding: 10,
    alignItems: 'center',
    borderRadius:20,
  },
  buttonText: {
    color: 'white',
  },
  linkText: {
    color: '#E96E6E',
    marginTop: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
