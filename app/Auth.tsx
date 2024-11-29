import {
    Pressable, StyleSheet, Text, View
} from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


export default function Auth() {

    const navigation = useNavigation()
    return (
        <View>
            <Text>Auth</Text>
            <Pressable onPress={() => navigation.navigate('StartPage')}>
                <Text style={{ color: 'white', fontSize: 18 }}>Sign In</Text>
                <Ionicons name='arrow-forward' size={25} color='white' />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({})