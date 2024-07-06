import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'lottie-react-native'

const Success = ({ navigation }) => {
    console.warn(Platform.OS)
    useEffect(() => {
        let id = setTimeout(() => {
            navigation.navigate("orders")
        }, 5000)
        return () => clearTimeout(id)
    }, [])
    return <View style={{ flex: 1 }}>
        {
            Platform.OS === "android"
                ? <LottieView
                    source={require("../assets/success.json")}
                    autoPlay
                />
                : <Text>Success</Text>
        }


    </View>
}

export default Success

const styles = StyleSheet.create({})