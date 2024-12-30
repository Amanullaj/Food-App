import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../slices/cartSlice'

const CartIcon = () => {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    if(!cartItems.length) return;
    return (
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
                <View style={styles.main}>
                    <Text style={styles.txt1}>{cartItems.length}</Text>
                    <Text style={styles.txt}>View Cart</Text>
                    <Text style={styles.txt2}>Rs.{cartTotal}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CartIcon

const styles = StyleSheet.create({
    main: { backgroundColor: "orange", flexDirection: "row", justifyContent: "space-between", padding: 10,margin:5,borderRadius:20 },
    txt : {color:"white",fontSize:20,fontWeight:"bold"},
    txt1: { color: "white", fontSize: 20, fontWeight: "bold", backgroundColor: "#ffb380", height: 30, width: 40, borderRadius: 20, textAlign: "center", justifyContent: "center" },
    txt2 : {color: "white", fontSize: 20, fontWeight: "bold"}
})