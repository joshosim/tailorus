import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { RouteProp, useNavigation } from '@react-navigation/native'
import CardPayment from '@/components/CardPayment'
import Transfer from '@/components/Transfer'

export default function Payment({ route }: { route: RouteProp<any, "Payment"> }) {

    const { product, measurements } = route.params;

    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    const [active, setActive] = useState('Card')

    const handleSelect = (item: string) => {
        setActive(item)
    }

    const PaymentCard = ({ item }: { item: string }) => {
        return (
            <Pressable onPress={() => handleSelect(item)} style={{
                backgroundColor: active === item ? 'black' : 'tranaparent',
                borderWidth: active === item ? 0 : 1,
                height: 40, alignItems: 'center', justifyContent: 'center', padding: 10, marginRight: 10, borderRadius: 10
            }}>
                <Text style={{ color: active === item ? 'white' : 'black' }}>{item}</Text>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 25 }}>
                <Ionicons onPress={goBack} name='arrow-back' size={25} />
                <Text style={{ fontWeight: 700, fontSize: 18 }}>Payment</Text>
            </View>
            <View>
                <FlatList
                    horizontal
                    data={[
                        'Card', 'Transfer',
                    ]} renderItem={({ item }) => <PaymentCard item={item} />} />
            </View>
            <View style={{ flex: 1, marginTop: 20 }}>
                {active === 'Card' ?
                    // <Text style={{
                    // fontWeight: 600,
                    // fontSize: 22, textAlign: 'center'
                    // }}>NGN{product.price}</Text>
                    <CardPayment />
                    :
                    // <Text>{measurements.neck}</Text>
                    <Transfer />
                }
            </View>
            <Pressable onPress={() => navigation.navigate('PaymentSuccess')} style={{ backgroundColor: 'black', padding: 15, borderRadius: 5 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>{active === 'Card' ? 'Pay' : 'Confirm'}</Text>
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