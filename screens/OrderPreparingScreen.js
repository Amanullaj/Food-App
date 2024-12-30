import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import LottieView from 'lottie-react-native';


const OrderPreparingScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Delivery")
        },3000)
    },[])
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}>
     <LottieView source={require('../images/animation.json')} autoPlay loop style={{height:500,width:400}} />
    </View>
  )
}

export default OrderPreparingScreen

const styles = StyleSheet.create({})