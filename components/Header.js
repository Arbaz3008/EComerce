import { StyleSheet, View, Image , Text, TouchableOpacity} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isCart }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={()=> navigation.navigate ("HomeScreen")}style={styles.appsContainer}>
        {isCart ? (
          <Icon  style={{ top:22}}name={"chevron-back-sharp"} size={26} color={"#E96E6E"} />
        ) : (
          <Image source={require("../assets/apps.png")} style={styles.apps} />
        )}
      </TouchableOpacity>
      {
        isCart &&   <Text style={styles.cart}>My Cart</Text>
      }
    
      <Image source={require("../assets/DP.png")} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appsContainer: {
    backgroundColor: "#FFFFF",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  apps: {
    height: 28,
    width: 28,
    top: 20,
  },
  dp: {
    height: 44,
    width: 44,
    top: 20,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 12,
    marginEnd: 8,
  },
  cart:{
    top:22,
    fontSize:24,
    color:"black"
  }
});
