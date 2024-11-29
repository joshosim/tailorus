import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function CardPayment() {

    const TextField = ({ placeholder, width = '100%' }:
        { placeholder: string, width?: any }) => {
        return (
            <TextInput placeholder={placeholder}
                keyboardType='numeric'
                style={{
                    marginVertical: 10, borderColor: 'black', borderWidth: 1,
                    borderRadius: 5, padding: 10, width
                }} />
        )
    }
    const CardVirtual = () => {
        return (
            <View></View>
        )
    }

    return (
        <View style={styles.container}>
            <CardVirtual />
            <TextField placeholder='Card Number' />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <TextField placeholder='Expiry Date' width='49%' />
                <TextField placeholder='CV' width='49%' />
            </View>
            <TextField placeholder='Card Pin' />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    tile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    innerTile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    startIcon: {
        backgroundColor: 'white',
        padding: 4,
        borderColor: '#ece4e7',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },

})