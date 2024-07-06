import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Button, Surface } from 'react-native-paper'
import { useUserPlaceOrderMutation } from '../redux/apis/mobileUserApi'
import { emptyCart } from '../redux/slices/mobileUserSlice'

const Payment = ({ navigation }) => {
    const { user } = useSelector(state => state.auth)
    const { cart } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [placeOrder, { isSuccess, isError, error }] = useUserPlaceOrderMutation()

    const handlePlaceOrder = () => {
        const obj = {
            user: user._id,
            products: cart.map(item => {
                return { product: item._id, qty: item.qty }
            })
        }
        placeOrder(obj)
    }
    useEffect(() => {
        if (!user) {
            navigation.navigate("Login")
        }
    }, [])

    useEffect(() => {
        if (isSuccess) {
            dispatch(emptyCart())
            navigation.navigate("Success")
        }
    }, [isSuccess])

    return <View style={{
        flex: 1,
        justifyContent: "center",
    }}>
        <Surface style={{
            padding: 20,
            borderRadius: 10,
            margin: 10,
            gap: 20
        }}>
            <View><Text>Pay On Delivery</Text></View>
            <Button onPress={handlePlaceOrder} mode='contained'>Place Order</Button>
        </Surface>
    </View>
}

export default Payment

const styles = StyleSheet.create({})