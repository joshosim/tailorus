import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

export default function Settings() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontWeight: 600, fontSize: 20 }}>Settings</Text>

            <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', marginTop: 20,
                borderBottomWidth: 1, borderColor: 'black', paddingBottom: 10
            }}>
                <Text style={{ fontWeight: 600 }}>App Theme</Text>
                <Ionicons name='moon-sharp' color='black' size={30} />
            </View>
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', marginTop: 20,
                borderBottomWidth: 1, borderColor: 'black', paddingBottom: 10
            }}>
                <Text style={{ fontWeight: 600 }}>Logout</Text>
                <Ionicons name='log-out' color='black' size={30} />
            </View>
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', marginTop: 20,
                borderBottomWidth: 1, borderColor: 'black', paddingBottom: 10
            }}>
                <Text style={{ fontWeight: 600 }}>Logout</Text>
                <Ionicons name='log-out' color='black' size={30} />
            </View>
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', marginTop: 20,
                borderBottomWidth: 1, borderColor: 'black', paddingBottom: 10
            }}>
                <Text style={{ fontWeight: 600 }}>Logout</Text>
                <Ionicons name='log-out' color='black' size={30} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ece7e4'
    },
})