import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({item,selectedCategory, setSelectCategory }) => {
  return (
    <TouchableOpacity onPress={()=>setSelectCategory(item)}>
      <Text style={[styles.category, selectedCategory===item &&{color:'#FFFFFF',backgroundColor:'#E96E6E'}] }>{item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    category:{
        fontSize:16,
        color:"#938F8F",
        backgroundColor:"#DFDCDC",

        padding:10,
        textAlign:"center",
        borderRadius:16,
        marginHorizontal:10,
        paddingHorizontal:20,
        paddingVertical:10,
    }
})