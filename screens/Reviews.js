import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';

const Reviews = ({ productId }) => {
  const [reviews, setReviews] = useState([
    // Example reviews for front-end testing
    { id: 1, review: 'Great product!' },
    { id: 2, review: 'Not bad, could be better.' },
    { id: 3, review: 'I loved it!' },
  ]);
  const [newReview, setNewReview] = useState('');

  const submitReview = () => {
    // Handle review submission logic here
    console.log('Submit button pressed');
    setReviews([...reviews, { id: reviews.length + 1, review: newReview }]);
    setNewReview('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <Text>{item.review}</Text>}
        keyExtractor={item => item.id.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a review"
        onChangeText={setNewReview}
        value={newReview}
      />
      <TouchableOpacity style={styles.button} onPress={submitReview}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default Reviews;
