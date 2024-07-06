import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, RadioButton, Snackbar, TextInput } from 'react-native-paper'
import { useCustomerRegisterMutation } from '../redux/apis/mobileAuthApi'

const Register = ({ navigation }) => {
    const [userdata, setUserdata] = useState({})
    const [register, { isSuccess, isError, error }] = useCustomerRegisterMutation()
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (isSuccess) {
            navigation.navigate("Login")
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
    return (
        <View style={{ paddingTop: 50, padding: 15, gap: 20 }}>
            <View>
                <Text style={styles.font}>Create Your </Text>
                <Text style={styles.font}>Account </Text>
            </View>
            <View style={{ gap: 10 }}>
                <Text style={styles.input} variant='bodySmall'>Full Name</Text>
                <TextInput
                    onChangeText={val => setUserdata({ ...userdata, name: val })}
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="account" />}
                    placeholder='Type Your Name'

                />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={styles.input} variant='bodySmall'>Email</Text>
                <TextInput
                    onChangeText={val => setUserdata({ ...userdata, email: val })}
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="mail" />}
                    placeholder='Type Your Email'
                />
            </View>
            <View style={{ gap: 10 }}>
                <Text s style={styles.input} variant='bodySmall'>Password</Text>
                <TextInput
                    onChangeText={val => setUserdata({ ...userdata, password: val })}
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

            <Pressable onPress={e => navigation.navigate("Login")}>
                <Text>Already Have Account? login Here.</Text>
            </Pressable>
            <Button onPress={e => register(userdata)} mode='contained'>Sing Up</Button>
            <Snackbar visible={show}>{JSON.stringify(error, null, 2)}</Snackbar>
        </View>
    )
}

export default Register

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