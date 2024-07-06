import { Platform, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Card, Icon, MD3Colors, Surface } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { useLazyGetUserOrdersQuery, useUserCancelOrderMutation } from '../redux/apis/mobileUserApi'

const My_Order = () => {
    const [cancelOrder, { isSuccess: cancelSuccess, error }] = useUserCancelOrderMutation()
    const { user } = useSelector(state => state.auth)
    const [getOrders, { isSuccess, data, isLoading }] = useLazyGetUserOrdersQuery()
    useEffect(() => {
        getOrders(user._id)
    }, [])
    return (
        <ScrollView refreshControl={<RefreshControl
            refreshing={isLoading}
            onRefresh={e => getOrders(user._id)}
        />}>
            {/* <View>
                <Text>{JSON.stringify(data, null, 2)}</Text>
            </View> */}
            <View style={{ paddingTop: 50, padding: 15 }}>
                <View style={{ flexDirection: "row", paddingLeft: 15, alignItems: 'center' }}>
                    <View>
                        <Icon
                            source='basket-check-outline'
                            size={30}
                        ></Icon>
                    </View>
                    <View>
                        <Text style={styles.font}>My Cart</Text>
                    </View>
                </View>
                {
                    data && data.map(item => <Surface
                        style={{
                            backgroundColor: item.status === "cancel" && MD3Colors.error90,
                            padding: 10,
                            marginVertical: 10
                        }} key={item._id}>
                        <View>
                            <Text>Date: {item.createdAt}</Text>
                            <Text>Status: {item.status}</Text>
                        </View>
                        {
                            item.products.map(p => <View key={p._id} style={{
                                flexDirection: "row",
                                gap: 15,
                                alignItems: "center",
                                paddingLeft: 10,
                                paddingTop: 40
                            }}>
                                <View >
                                    <Card.Cover
                                        style={{ borderRadius: 10, height: 130, width: 120 }}
                                        source={{ uri: p.product.images }}
                                    ></Card.Cover>
                                </View>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 18, alignItems: 'center' }}>{p.product.name}</Text>
                                    <Text style={{ color: "gray", paddingTop: 3, }}>Indoor</Text>
                                    <Text style={{ color: "gray", paddingTop: 3, color: "green", fontWeight: "bold", fontSize: 20 }}>${p.product.price}</Text>
                                </View>
                            </View>)
                        }
                        {
                            item.status === "placed" && <Button
                                style={{ marginVertical: 20 }}
                                mode='contained-tonal'
                                onPress={e => cancelOrder(item)}
                                buttonColor={MD3Colors.error90}>Cancel Order</Button>

                        }

                    </Surface>)
                }

            </View>
        </ScrollView>
    )
}

export default My_Order

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 25,
        paddingLeft: 15
    },
})