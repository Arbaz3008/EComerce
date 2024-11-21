import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CartContext } from "./CartContext";

const sizes = ["S", "M", "L", "XL"];
const colorsArray = ["#91A1B0", "#B11D1D", "#1F44A3", "#9F632A", "#1D752B", "#000000"];

const Product = () => {
  const navigation = useNavigation();
  const { addToCart } = useContext(CartContext);
  const route = useRoute();
  const item = route.params.item;

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select a size and color before adding to the cart.");
      return;
    }

    const cartItem = { ...item, size: selectedSize, color: selectedColor };
    addToCart(cartItem);
    navigation.navigate("Cart");
  };

  return (
    <LinearGradient colors={["#FDF0F3", "#FFFBFC"]} style={styles.background}>
      <ScrollView>
        <View>
          <Header />
        </View>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.title, styles.price]}>${item.price}</Text>
        </View>
        <Text style={[styles.title, styles.size]}>Size</Text>
        <View style={styles.sizes}>
          {sizes.map((size, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.sizeValue, selectedSize === size && styles.selectedSize]}
              onPress={() => setSelectedSize(size)}
            >
              <Text style={[styles.textValue, selectedSize === size && { color: "#E55B5B" }]}>
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={[styles.title, styles.size, styles.color]}>Colors</Text>
        <View style={styles.colorContainer}>
          {colorsArray.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedColor(color)}
              style={[
                styles.circleBorder,
                selectedColor === color && { borderColor: color, borderWidth: 2 },
              ]}
            >
              <View style={[styles.circle, { backgroundColor: color }]} />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.textButton}>Add To Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default Product;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    top: 10,
    width: "100%",
    height: 420,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    top: 10,
    fontSize: 20,
    color: "#444444",
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  price: {
    color: "#4d4c4c",
  },
  size: {
    marginHorizontal: 20,
  },
  sizes: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizeValue: {
    top: 12,
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  selectedSize: {
    borderColor: "#E55B5B",
    borderWidth: 1,
  },
  textValue: {
    fontSize: 18,
  },
  color: {
    top: 15,
  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginHorizontal: 5,
  },
  colorContainer: {
    marginTop: 25,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  circleBorder: {
    height: 48,
    width: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
  button: {
    backgroundColor: "#E96E6E",
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
  textButton: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
});
