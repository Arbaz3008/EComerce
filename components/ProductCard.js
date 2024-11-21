import React, { StyleSheet, Image, View , Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const ProductCard = ({item, handleLiked}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity   onPress={()=>{
        navigation.navigate('Product',{item})
    }}  style={styles.container}>
    <Image source={{uri: item.image}} style={styles.cover}/>
    <View style={styles.content}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.price}>{item.price}</Text>
    </View>
    <TouchableOpacity   onPress={()=> {handleLiked(item)}} style = {styles.heart}>
            {!item.isLiked?(
            <Icon name={"heart-outline"} size={26} color={"#E55B5B"} />
        ):(
            
            <Icon name={"heart"} size={26} color={"#E55B5B"} />
        )}
    </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    container:{
flex:1,
position:"relative"
    },
    cover:{
        height:256,
        width:"90%",
        borderRadius:20,
        marginVertical:10,
        marginLeft:10,
    },
title:{
    fontSize:18,
    color:"black",
},
price:{
    fontSize:18,
    color:'#9C9C9C',  
},
content:{
    paddingLeft:20,
},
heart:{
    height:34,
    width:34,
    backgroundColor:"#FFFFFF",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:17,
    position:"absolute",
    top:20,
    right:20,
}
})