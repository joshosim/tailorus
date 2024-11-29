import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { RouteProp, useNavigation } from '@react-navigation/native'

export default function Measurement({ route }: { route: RouteProp<any, "Measurement"> }) {

    const { product } = route.params

    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    const [neck, setNeck] = useState(0)
    const [sleeve, setSleeve] = useState(0)
    const [wrist, setWrist] = useState(0)
    const [_length, setLength] = useState(0)
    const [front, setFront] = useState(0)
    const [back, setBack] = useState(0)

    const measurements = {
        neck, sleeve, front, back, _length, wrist
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 15 }}>
                <Ionicons onPress={goBack} name='arrow-back' size={25} />
                <Text style={{ fontWeight: 700, fontSize: 18 }}>Measurement</Text>

            </View>

            <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 700, fontSize: 16, }}>{product.title}</Text>
                <Text style={{ fontWeight: 500, fontSize: 16, marginVertical: 20 }}>All measurements in inches(inch)</Text>
                {/* list of the measurement styles */}
                <View style={{ marginBottom: 50, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Neck</Text>
                        <TextInput onChangeText={(text) => setNeck(parseInt(text))} keyboardType='numeric' textAlign='center' placeholder='0'
                            style={{ width: '100%', borderBottomColor: 'black', borderBottomWidth: 2 }} />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Sleeve</Text>
                        <TextInput onChangeText={(text) => setSleeve(parseInt(text))} keyboardType='numeric' textAlign='center' placeholder='0'
                            style={{ width: '100%', borderBottomColor: 'black', borderBottomWidth: 2 }} />
                    </View>
                </View>
                <View style={{ marginBottom: 50, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Wrist</Text>
                        <TextInput onChangeText={(text) => setWrist(parseInt(text))} keyboardType='numeric' textAlign='center' placeholder='0'
                            style={{ width: '100%', borderBottomColor: 'black', borderBottomWidth: 2 }} />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Length</Text>
                        <TextInput onChangeText={(text) => setLength(parseInt(text))} keyboardType='numeric' textAlign='center' placeholder='0'
                            style={{ width: '100%', borderBottomColor: 'black', borderBottomWidth: 2 }} />
                    </View>
                </View>
                <View style={{ marginBottom: 50, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Neck</Text>
                        <TextInput onChangeText={(text) => setFront(parseInt(text))} keyboardType='numeric' textAlign='center' placeholder='0'
                            style={{ width: '100%', borderBottomColor: 'black', borderBottomWidth: 2 }} />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Neck</Text>
                        <TextInput onChangeText={(text) => setBack(parseInt(text))} keyboardType='numeric' textAlign='center' placeholder='0'
                            style={{ width: '100%', borderBottomColor: 'black', borderBottomWidth: 2 }} />
                    </View>
                </View>

            </View>
            <Pressable onPress={() => {
                navigation.navigate('Payment', { measurements, product })
                console.log("measurements", measurements)
            }} style={{ backgroundColor: 'black', padding: 15, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Make Order</Text>
            </Pressable>
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