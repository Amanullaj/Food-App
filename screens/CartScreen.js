import { StyleSheet, Text, View, TouchableOpacity,Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/Ionicons";
import { Featured } from '../components/Categories';
import Icn from "react-native-vector-icons/AntDesign"
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurent } from '../slices/restaurentSlice';
import { selectCartTotal, selectCartItems, removeFromCart } from '../slices/cartSlice';


const CartScreen = () => {
   const navigation = useNavigation();
   const restaurent = useSelector(selectRestaurent);
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);
   const [groupedItems,setGroupedItems] = useState({});
   const dispatch = useDispatch();
   const deliveryFee = 20;

   useEffect(()=>{
        const items = cartItems.reduce((group, item)=>{
            if(group[item.id]){
                group[item.id].push(item);
            }else{
                group[item.id] = [item];
            }
            return group;
        },{})
        setGroupedItems(items);
   },[cartItems]) 
  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon name="arrow-back-circle-outline" size={40} color="orange"/>
            </TouchableOpacity>
            <View style={{flex:1,alignItems:"center"}}>
                <Text style={{fontSize:20,color:"black"}}>Your Cart</Text>
                <Text>{restaurent.name}</Text>
            </View>
         </View>
        <View style={styles.view}>
            <Image source={require("../images/bikeGuy.png")} style={styles.img}/>
            <Text style={{fontSize:15,fontWeight:"bold"}}>Deliver in 20-30 Minutes</Text>
            <Text style={{fontWeight:"bold",color:"orange",fontSize:20}}>Change</Text>
        </View>
        <ScrollView>
        {
                Object.entries(groupedItems).map(([key,items])=>{
                    let dish = items[0]; 
                    return(
                        <View key={key} style={styles.map}>
                            <Text style={{color:"orange",fontSize:20,fontWeight:"bold"}}> {items.length} x   </Text>
                            <Image source={dish.image} style={{height:80,width:80,borderRadius:35}}/>
                            <Text style={{fontWeight:"bold",fontSize:20,color:"black"}}>    {dish.name}      </Text>
                            <Text style={{fontWeight:"bold",fontSize:20,color:"black"}}>     Rs.{dish.price}</Text>
                            <TouchableOpacity style={styles.icon} onPress={()=>dispatch(removeFromCart({id: dish.id}))}>
                             <Icn name="minus" color="white" size={20}/>
                             </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
        <View style={styles.view2}>
        <View style={styles.view1}>
            <Text style={{fontSize:17,color:"black"}}>Sub Total</Text>
            <Text style={{fontSize:17,color:"black"}}>Rs. {cartTotal}</Text> 
        </View>
        <View style={styles.view1}>
            <Text style={{fontSize:17,color:"black"}}>Delivery Charges</Text>
            <Text style={{fontSize:17,color:"black"}}>Rs. {deliveryFee} </Text>
        </View>
        <View style={styles.view1}>
            <Text style={{fontSize:18,color:"black",fontWeight:"bold"}}>Order Total</Text>
            <Text style={{fontSize:18,color:"black",fontWeight:"bold"}}>Rs. {cartTotal+deliveryFee}</Text>
        </View>
        <View style={styles.view3}>
        <TouchableOpacity onPress={()=>navigation.navigate("OrderPreparingScreen")}>
            <Text style={styles.txt1}>Place Order</Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    main : {flex:1},
    container : {flexDirection:"row",padding:10,backgroundColor:"white"},
    img : {height:80,width:80},
    view : {flexDirection:"row", alignItems:"center",backgroundColor:"#ffe0cc",justifyContent:"space-evenly",padding:10},
    map : {flexDirection:"row",padding:10,margin:5,backgroundColor:"white",borderRadius:20,alignItems:"center",justifyContent:"space-evenly"},
    icon : {backgroundColor:"orange",height:30,width:30,borderRadius:15,justifyContent:"center",alignItems:"center",margin:10},
    view1 : {flexDirection:"row",justifyContent:"space-between",padding:8},
    view2 : {backgroundColor:"#ffe0cc",borderTopLeftRadius:30,borderTopRightRadius:30},
    view3 : {margin:5,alignItems:"center",justifyContent:"center"},
    txt1 : {color:"white",fontWeight:"bold",fontSize:20,backgroundColor:"orange",height:50,width:300,borderRadius:30,textAlign:"center",padding:10}
})