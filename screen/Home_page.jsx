import { Pressable, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicator, Avatar, Button, Card, Icon, MD3Colors, Surface, TextInput } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './Profile'
import My_Order from './My_Order'
import Check_Out from './Check_Out'
import { useGetPublicProductsQuery, useLazyGetPublicProductsQuery } from '../redux/apis/mobilePublicApi'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home_page = () => {
    const Tab = createBottomTabNavigator()
    const { cart } = useSelector(state => state.user)

    return <>
        <Tab.Navigator>
            <Tab.Screen
                options={{ tabBarIcon: () => <Icon size={30} source="home" /> }}
                name='main'
                component={Home} />
            <Tab.Screen
                options={{ tabBarIcon: () => <Icon size={30} source="account" /> }}
                name='profile'
                component={Profile} />
            <Tab.Screen
                options={{
                    tabBarBadge: cart.length,
                    tabBarIcon: () => <Icon size={30} source="cart" />
                }}
                name='cart'
                component={Check_Out} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Icon size={30} source="package-variant" />
                }}
                name='orders' component={My_Order} />
        </Tab.Navigator>
    </>
}

const Home = ({ navigation }) => {
    const { user } = useSelector(state => state.auth)
    // const { data, isLoading } = useGetPublicProductsQuery()
    const [getProducts, { data, isLoading }] = useLazyGetPublicProductsQuery()

    const handleLogout = async () => {
        await AsyncStorage.removeItem("auth")
        navigation.navigate("Login")
    }
    useEffect(() => {
        getProducts()
        return () => console.log("cleanup")
    }, [])


    return <ScrollView
        refreshControl={<RefreshControl
            refreshing={isLoading}
            onRefresh={getProducts}
        />}
    >

        {
            isLoading
                ? <ActivityIndicator size="large"></ActivityIndicator>
                : <View style={{ paddingTop: 30, padding: 20 }}>
                    <StatusBar hidden />

                    <View style={{ gap: 75, flexDirection: 'row', alignItems: "center" }}>

                        <View style={{ justifyContent: "center", flexDirection: 'row', gap: 9, alignItems: "center" }}>
                            <View>
                                <Avatar.Image size={60} source={require('../assets/icon.png')} />
                            </View>
                            <View>
                                <Text style={styles.font}>
                                    {user.name}
                                    {/* {JSON.stringify(user, null, 2)} */}
                                </Text>
                                <Button
                                    onPress={handleLogout}
                                    mode='contained-tonal'
                                    buttonColor={MD3Colors.error80}
                                >Logout</Button>
                                <Text style={{ color: "gray" }} > <Icon
                                    source='google-maps'
                                    size={15}
                                ></Icon>San Francisco</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", margin: 15, gap: 15 }}>
                            <Icon
                                source='heart'
                                size={20}
                            ></Icon>
                            <Icon
                                source='bell'
                                size={20}
                            ></Icon>
                        </View>
                    </View>


                    <View style={{ paddingTop: 30, }} >
                        <TextInput

                            mode='outlined'
                            left={<TextInput.Icon icon='magnify' />}
                            right={<TextInput.Icon icon='format-list-bulleted' />}
                            placeholder='Search' />
                    </View>

                    <Text style={{ paddingTop: 20, fontWeight: "bold", fontSize: 15 }}>Special Offers</Text>
                    <ScrollView showsHorizontalScrollIndicator={true} horizontal >
                        <View style={{ flexDirection: "row", gap: 10, paddingTop: 20 }}>
                            <Card.Cover
                                style={{ borderRadius: 20, height: 120, width: 200 }}
                                source={{ uri: "https://plus.unsplash.com/premium_photo-1661513900495-1ef62c0ddfec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}

                            ></Card.Cover>
                            <View >
                                <Card.Cover
                                    style={{ borderRadius: 20, height: 120, width: 200 }}
                                    source={{ uri: "https://plus.unsplash.com/premium_photo-1661513900495-1ef62c0ddfec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}

                                ></Card.Cover>
                            </View>
                            <View >
                                <Card.Cover
                                    style={{ borderRadius: 20, height: 120, width: 200 }}
                                    source={{ uri: "https://plus.unsplash.com/premium_photo-1661513900495-1ef62c0ddfec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}

                                ></Card.Cover>
                            </View>
                            <View >
                                <Card.Cover
                                    style={{ borderRadius: 20, height: 120, width: 200 }}
                                    source={{ uri: "https://plus.unsplash.com/premium_photo-1661513900495-1ef62c0ddfec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}

                                ></Card.Cover>
                            </View>
                            <View >
                                <Card.Cover
                                    style={{ borderRadius: 20, height: 120, width: 200 }}
                                    source={{ uri: "https://plus.unsplash.com/premium_photo-1661513900495-1ef62c0ddfec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}

                                ></Card.Cover>
                            </View>
                            <View >
                                <Card.Cover
                                    style={{ borderRadius: 20, height: 120, width: 200 }}
                                    source={{ uri: "https://plus.unsplash.com/premium_photo-1661513900495-1ef62c0ddfec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}

                                ></Card.Cover>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ paddingLeft: 140, paddingTop: 10 }}>
                        <Icon
                            source='dots-horizontal'
                            size={40}
                        ></Icon>
                    </View>
                    <View style={{ flexDirection: "row", gap: 55, fontWeight: "bold", fontSize: 15 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>All</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Indoor</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Outdor</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Garden</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        gap: 20,
                        paddingTop: 20,
                        flexWrap: "wrap"
                    }}>

                        {
                            data && data.map(item => <Pressable
                                key={item._id}
                                onPress={e => navigation.navigate("Details", { product: item })}>
                                <Surface>
                                    <Card.Cover
                                        style={{
                                            borderRadius: 10,
                                            height: 150,
                                            width: 150,
                                            objectFit: "cover"
                                        }}
                                        source={{ uri: item.images }}
                                    ></Card.Cover>
                                    <View style={{ padding: 10 }}>

                                        <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 18 }}>
                                            {item.name}
                                        </Text>
                                        <Text style={{ color: "gray", paddingTop: 6, }}>Indoor</Text>
                                        <Text style={{ color: "gray", paddingTop: 6, color: "green", fontWeight: "bold", fontSize: 20 }}>
                                            ₹ {item.price}
                                        </Text>
                                    </View>
                                </Surface>
                            </Pressable>)
                        }

                    </View>
                </View>
        }


    </ScrollView>
}

export default Home_page

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 15,
        paddingLeft: 5,
        paddingBottom: 8,

    },
})
