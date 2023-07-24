import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurentScreen from './screens/RestaurentScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Restaurent" component={RestaurentScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
      <Stack.Screen name="OrderPreparingScreen" component={OrderPreparingScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Delivery" component={DeliveryScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
);
}
const styles = StyleSheet.create({
main : {flex:1}
})
export default Navigation;

