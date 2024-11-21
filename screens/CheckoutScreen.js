import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
  const [address, setAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);


  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDeliveryDate(selectedDate.toLocaleDateString());
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      setDeliveryTime(`${hours}:${minutes < 10 ? `0${minutes}` : minutes}`);
    }
  };

  const handleCheckout = () => {
    if (!address.trim()) {
      Alert.alert('Address Required', 'Please enter your address.');
      return;
    }

    if (!deliveryDate || !deliveryTime) {
      Alert.alert('Delivery Information Required', 'Please select delivery date and time.');
      return;
    }

    Alert.alert('Checkout Successful', `Address: ${address}\nDelivery Date: ${deliveryDate}\nDelivery Time: ${deliveryTime}`);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.background}>
        <Header />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            value={address}
            onChangeText={setAddress}
          />
          <TouchableOpacity style={styles.button} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.buttonText}>
              {deliveryDate ? `Delivery Date: ${deliveryDate}` : 'Select Delivery Date'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
            <Text style={styles.buttonText}>
              {deliveryTime ? `Delivery Time: ${deliveryTime}` : 'Select Delivery Time'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('map')}
            >
              <Text style={styles.buttonText}>Tracking</Text>
            </TouchableOpacity>
        </View>
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#E96E6E',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  map: {
    flex: 1,
    marginTop: 20,
  },
});

export default CheckoutScreen;
