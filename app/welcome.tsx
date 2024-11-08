import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'

export default function WelcomeScreen({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <Pressable style={{}} onPress={() => navigation.navigate('(tabs)')}>
                <Text>Welcome to Tailorus</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})