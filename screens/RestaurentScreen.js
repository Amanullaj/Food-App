import { StyleSheet, Text, View,ScrollView,Image,StatusBar,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Icon from "react-native-vector-icons/Entypo";
import DishRow from '../components/DishRow';
import { useDispatch } from 'react-redux';
import { setRestaurent } from '../slices/restaurentSlice';
import CartIcon from '../components/CartIcon';


const RestaurentScreen = () => {
  const navigation = useNavigation();
    const {params} = useRoute();
    let item = params;
    const dispatch = useDispatch();
   useEffect(()=>{
    if(item && item.id){
      dispatch(setRestaurent({...item}))
    }
   },[]) 
  return (
    <View style={{flex:1}}>
        <View style={{flex:1}}>
            <StatusBar backgroundColor={"orange"} barStyle="light-content" />
            <CartIcon />
      <ScrollView>
        <View style={{alignItems:"center",justifyContent:"space-around"}}>
        <Image source={item.image} style={styles.img}/>
         </View>
      <View style={styles.container}>
        <Text style={styles.txt1}>{item.name}</Text>
    <View style={{flexDirection:"row",margin:5}}>
      <Icon name="star" color="green" size={18}/>
      <Text>{item.stars}
      <Text>({item.reviews}reviews) | <Text>{item.category}  | <Icon name="location" size={18} />  <Text>{item.address}</Text> </Text></Text></Text>
      </View>
      <Text style={styles.txt2}>{item.description}</Text>
      </View>
      <View>
        <Text style={styles.txt3}>Menu</Text>
        {
            item.dishes.map((dish,index)=>{
              return(
            <DishRow key={index} item={{...dish}}/>)})
        }
      </View>
      </ScrollView>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back}>
        <Text style={styles.txt4}>Go Back</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default RestaurentScreen

const styles = StyleSheet.create({
    img : {flex:1,width:"100%",height:250},
    back : {flex:1,alignItems:"center",justifyContent:"center",margin:15,padding:10},
    container : {backgroundColor:"white"},
    txt1 : {fontSize:30,fontWeight:"bold",color:"black",padding:5},
    txt2 : {fontSize:15,fontWeight:"bold",padding:5},
    txt3 : {fontSize:25,fontWeight:"bold",color:"black",padding:5},
    txt4: {backgroundColor:"orange",height:40,width:100,color:"white",borderRadius:10,textAlign:"center",padding:10}
})