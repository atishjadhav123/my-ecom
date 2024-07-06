import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Icon, IconButton, Snackbar, Surface, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { addQty, emptyCart, reduceQty, removeFromCart } from '../redux/slices/mobileUserSlice'

const Check_Out = ({ navigation }) => {
    const { cart } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const handleSnackbar = id => {
        dispatch(removeFromCart(id))
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }
    return <>
        {
            cart.length === 0
                ? <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text variant='displaySmall'>Cart is Empty</Text>
                    <Button
                        onPress={e => navigation.navigate("main")}
                        mode='contained'>
                        Shop Now
                    </Button>
                </View>
                : <ScrollView style={{ flex: 1, }}>
                    <View style={{ paddingTop: 50, padding: 15, flex: 1, }}>
                        <View>
                            <Text style={styles.font}>Check Out</Text>
                        </View>

                        <View style={{ paddingTop: 20, paddingLeft: 10 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Today</Text>
                        </View>
                        <Button onPress={e => dispatch(emptyCart())}>Empty</Button>
                        <View style={{ flexDirection: "row", gap: 30, alignItems: "center", paddingLeft: 10, paddingTop: 20 }}>
                            <View>
                                <View>
                                    <Icon
                                        source='google-maps'
                                        size={40}
                                    ></Icon>
                                </View>
                            </View>
                            <View>
                                <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 16 }}>Home</Text>
                                <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>Congratulation you have succesfully buy a  </Text>
                                <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>plants </Text>
                            </View>
                        </View>
                        {
                            cart && cart.map((item, index) => <Surface
                                key={item._id}
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginVertical: 5
                                }}
                            >
                                <View style={{ flexDirection: "row", gap: 15, alignItems: "center", paddingLeft: 10, paddingTop: 40 }}>
                                    <View >
                                        <Card.Cover
                                            style={{ borderRadius: 10, height: 130, width: 120 }}
                                            source={{ uri: item.images }}
                                        ></Card.Cover>
                                    </View>
                                    <View style={{ alignItems: 'flex-start' }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 18, alignItems: 'center' }}>{item.name}</Text>
                                        <Text style={{ color: "gray", paddingTop: 3, }}>Indoor</Text>
                                        <Text
                                            style={{ color: "gray", paddingTop: 3, color: "green", fontWeight: "bold", fontSize: 20 }}>
                                            ${item.price} x {item.qty}
                                        </Text>
                                        <Text
                                            style={{
                                                color: "gray",
                                                paddingTop: 3,
                                                color: "green",
                                                fontWeight: "bold",
                                                fontSize: 20
                                            }}>{item.price * item.qty}</Text>
                                        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                            <IconButton disabled={item.qty === item.stock} onPress={e => dispatch(addQty(index))} icon="plus" />
                                            <View>
                                                <Text>{item.qty}</Text>
                                            </View>
                                            <IconButton disabled={item.qty === 1} onPress={e => dispatch(reduceQty(index))} icon="minus" />
                                        </View>
                                    </View>
                                </View>
                                <IconButton
                                    icon="trash-can"
                                    onPress={e => handleSnackbar(item._id)} />
                            </Surface>)
                        }
                        <Surface style={{ marginVertical: 20 }}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: 10
                            }}>
                                <Text>Total : </Text>
                                <Text variant='headlineSmall'>{cart.reduce((sum, item) => sum + (item.qty * item.price), 0)}</Text>
                            </View>
                        </Surface>

                        <Button onPress={e => navigation.navigate("Payment")} mode='contained' style={{ marginVertical: 20 }}>Continue</Button>
                    </View>

                    <Snackbar
                        visible={show}
                        action={[
                            { label: "ok", onPress: () => setShow(false) }
                        ]}
                    >Product Remove Success</Snackbar>
                </ScrollView>
        }

    </>

}

export default Check_Out

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 25,
        paddingLeft: 15
    },
    inputbox: {
        backgroundColor: "green",
        padding: 10,
        fontWeight: "bold",
        marginTop: 20
    },
})