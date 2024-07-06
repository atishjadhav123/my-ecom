import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import { Button, RadioButton, Snackbar, TextInput } from 'react-native-paper'
import { useCustomerLoginMutation } from '../redux/apis/mobileAuthApi'

import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from 'react-redux'
import { handleLogin } from '../redux/slices/mobileAuthSlice'
const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({})
    const [login, { data, isSuccess, isError, error }] = useCustomerLoginMutation()
    const [show, setShow] = useState(false)

    const handleLoginSuccess = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(data))
        navigation.navigate("Home")

    }
    const checkLogin = async () => {
        const result = await AsyncStorage.getItem("auth")
        if (result) {
            dispatch(handleLogin(JSON.parse(result)))
            navigation.navigate("Home")
        }
    }
    useEffect(() => {
        if (isSuccess) {
            handleLoginSuccess()
        }
    }, [isSuccess])
    useEffect(() => {
        let id
        if (isError) {
            setShow(true)
            id = setTimeout(() => {
                setShow(false)
            }, 3000);
        }
        return () => clearTimeout(id)
    }, [isError])

    useEffect(() => {
        checkLogin()
    }, [])

    return (
        <View style={{ paddingTop: 50, padding: 15, gap: 20 }}>
            <View>
                <Text style={styles.font}>Login To Your </Text>
                <Text style={styles.font}>Account </Text>
            </View>

            <View style={{ gap: 10 }}>
                <Text style={styles.input} variant='bodySmall'>Email</Text>
                <TextInput
                    onChangeText={val => setUserData({ ...userData, email: val })}
                    keyboardType='email-address'
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="mail" />}
                    placeholder='Type Your Email'
                />
            </View>
            <View style={{ gap: 10 }}>
                <Text s style={styles.input} variant='bodySmall'>Password</Text>
                <TextInput
                    onChangeText={val => setUserData({ ...userData, password: val })}
                    secureTextEntry
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="eye" />}
                    placeholder='Type Your Password'
                />
            </View>
            <View style={{ flexDirection: 'row', gap: 110, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: "center", }}>
                    <RadioButton value='female' />
                    <Text>Remmber Me</Text>
                </View>
                <View>
                    <Text style={styles.text}>Forget Password</Text>
                </View>
            </View>

            <Pressable onPress={e => navigation.navigate("Register")}>
                <Text>Dont Have Account? Create One.</Text>
            </Pressable>
            <Button onPress={e => login(userData)} mode='contained'>Login</Button>

            <Snackbar visible={show}>{JSON.stringify(error, null, 2)}</Snackbar>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 30,
    },
    input: {
        fontWeight: "bold",
    },
    inputbox: {
        backgroundColor: "green",
        padding: 10,
    },
    box: {
        backgroundColor: "white"
    },
    text: {
        fontWeight: "bold",
    }

})