import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icn from "react-native-vector-icons/AntDesign"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/cartSlice'

const DishRow = ({item}) => {
 const dispatch = useDispatch();
  const totalItems = useSelector(state=> selectCartItemsById(state,item.id));

  const handleIncrease = () => {
    dispatch(addToCart({...item}))
  }
  const handleDecrease = () => {
    dispatch(removeFromCart({id: item.id}))
  } 
  return (
    <View>
    <View style={styles.main}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
      <Image source={item.image} style={{height:100,width:150,borderRadius:30}}/>
       <View style={{padding:3}}>
        <Text style={{fontSize:20,color:"black"}}>{item.name}</Text>
        <Text style={{fontSize:15,color:"black"}}>{item.description}</Text>
        <Text style={{fontSize:20,color:"black",padding:5,fontWeight:"bold"}}>Rs.{item.price}</Text>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"flex-end"}}>
        <TouchableOpacity style={styles.icon} 
        onPress={handleDecrease} disabled={!totalItems.length}>
            <Icn name="minus" color="white" size={20}/>
        </TouchableOpacity>
        <Text>  {totalItems.length}  </Text>
        <TouchableOpacity style={styles.icon} onPress={handleIncrease}>
            <Icn name="plus" color="white" size={20}/>
        </TouchableOpacity>
        </View>
    </View>
    </View>
 
    </View>
    </View>
  )
}

export default DishRow

const styles = StyleSheet.create({
    main : {margin:5,backgroundColor:"white",height:125,width:"100%",padding:5,borderRadius:40},
    icon : {backgroundColor:"orange",height:30,width:30,borderRadius:15,justifyContent:"center",alignItems:"center"}
})