import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from '@react-navigation/native';

const RestaurentCard = ({item}) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity style={styles.main} onPress={()=>navigation.navigate('Restaurent',{...item})}>
      <Image source={item.image} style={styles.img}/>
      <View style={{padding:5,justifyContent:"flex-start"}}>
      <Text style={styles.txt1}>{item.name}</Text>
      <View style={{flexDirection:"row"}}>
      <View style={{flexDirection:"row"}}>
      <Icon name="star" color="green" size={18}/>
      <Text>{item.stars}
      <Text>({item.reviews}reviews) | <Text>{item.category}</Text></Text></Text>
      </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <Icon name="location" size={18} />
        <Text>{item.address}</Text> 
      </View>
      </View>
      </TouchableOpacity>
  )
}

export default RestaurentCard

const styles = StyleSheet.create({
    main : {padding:5,backgroundColor:"white",borderRadius:10,margin:5},
    img : {height:100,width:200,borderRadius:10},
    txt1 : {fontSize:20,fontWeight:"bold",color:"black"}
})