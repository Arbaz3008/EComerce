import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = ({ item, deleteItemFromCart }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.cover} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.circlesize}>
          <View style={[styles.circle, { backgroundColor: item.color }]} />
          <View style={styles.size}>
            <Text style={styles.text}>{item.size}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => deleteItemFromCart(item)}>
        <Icon name={"trash"} size={26} color={"#E96E6E"} />
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cover: {
    marginHorizontal: 10,
    height: 125,
    width: "25%",
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: "#444444",
  },
  price: {
    color: "#797979",
    marginVertical: 10,
    fontSize: 18,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  circlesize: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  size: {
    backgroundColor: "white",
    height: 32,
    width: 32,
    borderRadius: 16,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
