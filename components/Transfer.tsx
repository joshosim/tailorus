import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Transfer() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Text style={{ fontWeight: 700, fontSize: 45 }}>7066530998</Text>
                <Ionicons name='copy-outline' size={30} color='black' onPress={() => alert('Copied')} />
            </View>
            <Text style={{ fontWeight: 700, fontSize: 24 }}>OPAY</Text>
            <Text style={{ fontWeight: 700, fontSize: 24 }}>Osim Uka O.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})