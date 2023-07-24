import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import RestaurentCard from './RestaurentCard';

const FeaturedRow = ({title,description,restaurents}) => {
  return (
    <View>
        <View style={styles.main}>
      <Text style={styles.txt1}>{title}</Text>
      <TouchableOpacity>
      <Icon name="arrowright" size={30} color="#66ccff"/>
      </TouchableOpacity>
      </View>
      <Text style={styles.txt2}>{description}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
          restaurents.map((restaurent,index)=>{
            return (
                <RestaurentCard
                 item={restaurent}
                 key={index} />    
            )
          })
        }    
      
      
      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({
    main : {flexDirection:"row",justifyContent:"space-between"},
    txt1 : {padding:5,fontSize:20,fontWeight:"bold",color:"black"},
    txt2 : {padding:5}
})
