import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Cart from '../components/Cart';
import { CartContext } from '../components/CartContext';

const CartScreen = () => {
  const { carts, totalPrice, deleteItemFromCart } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <View style={styles.header}>
        <Header isCart={true} />
      </View>
      <FlatList
        data={carts}
        renderItem={({ item }) => (
          <Cart item={item} deleteItemFromCart={deleteItemFromCart} />
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 40, paddingBottom: 200 }}
        ListFooterComponent={
          <>
            <View style={styles.bottomContentContainer}>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Total:</Text>
                <Text style={styles.priceText}>${totalPrice}</Text>
              </View>
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Shipping:</Text>
                <Text style={styles.priceText}>$0.0</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.flexRowContainer}>
                <Text style={styles.titleText}>Grand Total:</Text>
                <Text style={[styles.total, { color: 'black' }]}>${totalPrice}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('CheckoutScreen')}
            >
              <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
          </>
        }
      />
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    marginBottom: 10,
  },
  flexRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  bottomContentContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  titleText: {
    fontSize: 18,
    color: '#757575',
  },
  priceText: {
    fontSize: 18,
    color: '#757575',
  },
  divider: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginTop: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#E96E6E',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});
