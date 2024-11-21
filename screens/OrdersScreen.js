import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const OrdersScreen = () => {
  const [orders, setOrders] = useState([
    // Example orders for front-end testing
    { id: 1, status: 'Pending' },
    { id: 2, status: 'Shipped' },
    { id: 3, status: 'Delivered' },
  ]);

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.background}>
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Order ID: {item.id}</Text>
            <Text>Status: {item.status}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
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
    padding: 16,
    top:"10%"
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default OrdersScreen;
