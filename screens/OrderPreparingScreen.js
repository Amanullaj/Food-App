import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'


const OrderPreparingScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Delivery")
        },2000)
    },[])
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
     <Image source={require("../images/delivery.gif")} style={{height:"50%",width:500}}/>
    </View>
  )
}

export default OrderPreparingScreen

const styles = StyleSheet.create({})