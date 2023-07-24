import { ScrollView, StyleSheet, Text, View,Image,TouchableOpacity, } from 'react-native'
import React, {useState}from 'react'
import CategoryCard from './CategoryCard';
import { Categories } from './Categories';

const Category = () => {
  const[active,setActive] = useState(null);
  return (
    <View style={{flex:1}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {
      Categories.map((item,index)=>{
        return(
          
          <View key={index} style={styles.main}>
            <TouchableOpacity style={{alignItems:"center"}} onPress={()=>setActive(Category.id)}>
            <Text style={{color:"black"}}>{item.name}</Text>
            <Image source={item.image} style={styles.img}/>
            </TouchableOpacity>
          </View>
          
        )
      })
    }
      </ScrollView>
      </View>
  )
}

export default Category;

const styles = StyleSheet.create({
    main : {flex:1,margin:5},
    img : {height:70,width:70,borderRadius:10}
})