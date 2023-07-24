import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Featured } from '../components/Categories'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import Icon from "react-native-vector-icons/FontAwesome";
import Icn from "react-native-vector-icons/Entypo";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurent } from '../slices/restaurentSlice';
import { emptyCart } from '../slices/cartSlice';

const DeliveryScreen = () => {
  const restaurent = useSelector(selectRestaurent)
  const  navigation = useNavigation();
  const dispatch = useDispatch();

  const cancelOrder = () => {
    navigation.navigate('Home');
    dispatch(emptyCart());
  }
  return (
    <View style={{ flex: 1, height: "100%", width: "100%" }} >
    <MapView
      initialRegion={{
        latitude: restaurent.lat,
        longitude: restaurent.lng,
        latitudeDelta: 0.01, /* Zooming Level */
        longitudeDelta: 0.01,
      }}
      style={{ flex: 1 }}
    >
      <Marker
        coordinate={{
          latitude: restaurent.lat,
          longitude: restaurent.lng
        }}
        title={restaurent.title}
        description={restaurent.description}

      />
    </MapView>
    <View style={{ backgroundColor: "white", flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
        <View style={{ borderRadius: 10, padding: 5 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Estimated Arrival</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>20 - 30 Minutes</Text>
          <Text style={{ fontWeight: "bold" }}>Your Order is on it's way</Text>
        </View>
        <Image source={require("../images/bikeGuy.png")} style={styles.img} />
      </View>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ flexDirection: "row", backgroundColor: "orange", borderRadius: 20, margin: 10, padding: 15 }}>
          <View>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>AMAN</Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>Your Rider</Text>
          </View>
          <View style={{ flexDirection: "row", paddingLeft: 180 }}>
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Icon name="phone" size={30} color="orange" style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 20, justifyContent: "center", padding: 7 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={cancelOrder}>
              <Icn name="cross" size={35} color="red" style={{ height: 40, width: 40, backgroundColor: "white", borderRadius: 20, justifyContent: "center", padding: 2 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DeliveryScreen

const styles = StyleSheet.create({
  img: { height: 80, width: 80 }
})