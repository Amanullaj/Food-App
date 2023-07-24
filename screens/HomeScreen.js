import React from "react";
import { StyleSheet, View, Text, TextInput, StatusBar, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icn from "react-native-vector-icons/AntDesign"
import Category from "../components/Category";
import FeaturedRow from "../components/FeaturedRow";
import { Biryani, Fastfood, Featured, featured } from "../components/Categories";

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            <View style={styles.main}>
                <View style={{ flexDirection: "row", alignItems: "center", padding: 3, justifyContent: "space-between" }}>
                    <Image source={{
                        uri:
                            "https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?w=1380&t=st=1689315961~exp=1689316561~hmac=3b1828a7828b875ccc6b96f090f8e33afcc2c8490cda82b0c8fe8aff29a6863a"
                    }}
                        style={{ height: 30, width: 30, borderRadius: 15 }} />
                    <View>
                        <Text>Deliver Now!</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
                            Current Location <Icon name="keyboard-arrow-down" size={20} color="#66ccff" /></Text>
                    </View>
                </View>
                <Icn name="user" size={40} color="#66ccff" />
            </View>
            <View style={{ backgroundColor: "white" }}>
                <View style={styles.input1}>
                    <Icon name="search" size={30} color="grey" />
                    <TextInput placeholder="Search for Restaurent or Item" style={{ fontSize: 20 }} />
                </View>
            </View>
            <ScrollView>
                <Category />
                <View>
                    {
                        [Featured].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurents={item.restaurents}
                                    description={item.description} />
                            )
                        })
                    }
                </View>
                <View>
                    {
                        [Biryani].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurents={item.restaurents}
                                    description={item.description} />
                            )
                        })
                    }
                </View>
                <View>
                    {
                        [Fastfood].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurents={item.restaurents}
                                    description={item.description} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>


    )
}
export default Home;
const styles = StyleSheet.create({
    input1: { flexDirection: "row", alignItems: "center", borderRadius: 5, borderWidth: 0.5, margin: 10, borderColor: "black", backgroundColor: "#f0f0f5" },
    main: { padding: 5, flexDirection: "row", justifyContent: "space-between", backgroundColor: "white" },

})