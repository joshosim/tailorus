import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Settings() {

    const [toggleMode, setToggleMode] = useState(false)

    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 15 }}>
                <Ionicons onPress={goBack} name='arrow-back' size={25} />
                <Text style={{ fontWeight: 700, fontSize: 18 }}>Settings</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
                <Image
                    source={require("../../assets/images/profile.jpg")}
                    style={{ width: 75, height: 75, borderRadius: 100 }}
                />
                <View>
                    <Text style={{ fontWeight: 700, fontSize: 18 }}>Mrs. Osim Uka Okpan</Text>
                    <Text style={{ fontWeight: 400, marginTop: 5 }}>Graphics Designer</Text>

                </View>
            </View>

            <View style={{
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between', marginTop: 20,
                borderBottomWidth: 1, borderColor: 'black', paddingBottom: 10
            }}>
                <Text style={{ fontWeight: 600 }}>App Theme</Text>
                <Ionicons name={toggleMode ? 'sunny-outline' : 'moon-outline'}
                    onPress={() => setToggleMode(!toggleMode)} color='black' size={30} />
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