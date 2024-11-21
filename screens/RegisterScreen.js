import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Register button pressed');
    // Navigate to the Home screen for demo purposes
    navigation.replace('Home');
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
        <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate ('LoginScreen') }>
        <Text style={styles.buttonText}>Register</Text>
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
    borderRadius:16
  },
  button: {
    backgroundColor: '#E96E6E',
    padding: 10,
    alignItems: 'center',
    borderRadius:16
  },
  buttonText: {
    color: 'white',
  },
});

export default RegisterScreen;
