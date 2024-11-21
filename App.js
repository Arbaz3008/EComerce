import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from "react-native";
import HomeScreen from './screens/HomeScreen';
import Product from './components/Product';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OrdersScreen from './screens/OrdersScreen';
import Reviews from './screens/Reviews';
import { CartContext, CartProvider } from './components/CartContext';
import Map from './components/Map';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ReviewsScreen"
        component={Reviews}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
           <Stack.Screen
        name="map"
        component={Map}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function CartIconWithBadge({ color, size }) {
  const { carts } = React.useContext(CartContext);
  return (
    <View style={{ position: "relative" }}>
      <Icon name="cart-outline" color={color} size={size} />
      {carts?.length > 0 && (
        <View style={{
          height: 20, width: 20, borderRadius: 18, backgroundColor: "#E96E6E",
          justifyContent: "center", alignItems: "center", position: "absolute", top: -5, right: -2,
        }}>
          <Text style={{ fontSize: 8, color: "white" }}>{carts.length}</Text>
        </View>
      )}
    </View>
  );
}

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#E96E6E', // Active tab color
            tabBarInactiveTintColor: '#444444', // Optional: color for inactive tabs
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <CartIconWithBadge color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrdersScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="list-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AuthStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="person-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
