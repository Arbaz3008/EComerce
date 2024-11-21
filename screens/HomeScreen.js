import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data.json'

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens'];

export default function App() {
  const [products , setProducts] = useState (data.products)
  const [selectedCategory, setSelectCategory] = useState('Trending Now');
  
 const handleLiked =(item)=>{
  const newProducts = products.map((prod)=>{
    if(prod.id === item.id){
      return{
        ...prod,
        isLiked:true,
      }
    };
    return prod;
  });
  setProducts(newProducts);
 }
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.background}>
        <Header />
        <FlatList
          numColumns={2}
          ListHeaderComponent={
            <>
              <Text style={styles.match}> Match Your Style</Text>
              <View style={styles.input}>
                <View style={styles.icon}>
                  <Icon name={"search"} size={26} color={"#C0C0C0"} />
                </View>
                <TextInput style={styles.textinput} placeholder='search' />
              </View>
              <FlatList
                data={categories}
                renderItem={({ item }) => (
                  <Category
                    item={item}
                    selectedCategory={selectedCategory}
                    setSelectCategory={setSelectCategory}
                  />
                )}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </>
          }
          data={products} // Adjust data as needed
          renderItem={({ item, index }) => (
            <ProductCard item={item}
            handleLiked={handleLiked}
            />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  match: {
    fontSize: 30,
    color: '#000000',
    marginTop: 25,
  },
  input: {
    backgroundColor: 'white',
    height: 48,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 15,
  },
  textinput: {
    flex: 1,
  },
});
