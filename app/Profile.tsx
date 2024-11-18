import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                <Image
                    source={require("../assets/images/profile.jpg")}
                    style={{ width: 75, height: 75, borderRadius: 100 }}

                />
                <Text style={{ fontWeight: 700, marginTop: 20, fontSize: 18 }}>Osim Uka Okpan</Text>
                <Text style={{ fontWeight: 400, marginTop: 5 }}>Graphics Designer</Text>

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