import React from 'react'
import { Appbar, Avatar, Button, TextInput } from 'react-native-paper'
import { View } from 'react-native'

const EditProfile = () => {
    return (
        <View style={{ padding: 10 }}>
            <View>
                <Appbar.Header>
                    <Appbar.Action icon='keyboard-backspace' />
                    <Appbar.Content title='Edit Profile' />
                </Appbar.Header>
            </View>
            <View style={{ paddingLeft: 100, paddingTop: 10 }}>
            </View>

            <View style={{ padding: 5, gap: 20, }}>
                <View>
                    <Text style={styles.input}>Full Name</Text>
                    <TextInput mode='contained' style={styles.input} left={<TextInput.Icon icon='account' />} placeholder='Yogesh Shelke' />
                </View>
                <View>
                    <Text style={styles.input}>Email</Text>
                    <TextInput style={styles.input} mode='contained' left={<TextInput.Icon icon='account' />} placeholder='shelkey123@gmail.com' />
                </View>
                <View>
                    <Text style={styles.input}>No Phone</Text>
                    <TextInput style={styles.input} mode='contained' left={<TextInput.Icon icon='account' />} placeholder='7721990168' />
                </View>
                <View>
                    <Text style={styles.input}>Gender</Text>
                    <TextInput style={styles.input} mode='contained' left={<TextInput.Icon icon='account' />} placeholder='Male' />
                </View>
                <View>
                    <Button style={{ backgroundColor: "green", padding: 4, color: 'red', marginTop: 15 }} mode='contained'>Button</Button>
                </View>
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    input: {
        fontWeight: "bold",
        backgroundColor: 'white'
    }
})