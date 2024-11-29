import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function PaymentSuccess() {

    const navigation = useNavigation()

    const goToOrders = () => {
        navigation.navigate('Orders')
    }
    const rateApp = () => {

    }
    const writeAReview = () => {
        navigation.navigate('ReviewsPage')
    }

    const UseableButton = ({ actionable, bgcolor = "transparent", textcolor, title,
        padding = 15, mT = 15 }: {
            actionable: () => void,
            bgcolor?: string,
            textcolor: string,
            title: string,
            padding?: number, mT?: number
        }) => {
        return (
            <Pressable onPress={actionable} style={{
                backgroundColor: bgcolor,
                padding: padding, borderRadius: 15, width: '100%', marginTop: mT,
                borderWidth: 1.5, borderColor: 'black'
            }}>
                <Text style={{ textAlign: 'center', color: textcolor, fontWeight: 600, fontSize: 18 }}>{title}</Text>
            </Pressable>
        )
    }
    const TheOrderCard = () => {
        return (
            <View style={{
                borderRadius: 15, backgroundColor: '#A7E5BE',
                paddingVertical: 40, paddingHorizontal: 15, position: 'relative'
            }}>
                <Text style={{ textAlign: 'center', fontWeight: 600, fontSize: 18 }}>Thank you for your order!</Text>
                <Text style={{ textAlign: 'center', marginHorizontal: 60, marginVertical: 10 }}>The order confirmation has been sent to your email address.</Text>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginHorizontal: 20,
                    justifyContent: 'space-between', marginTop: 10
                }}>
                    <View>
                        <Text style={{ fontWeight: '600', textAlign: 'center' }}>NGN 20,000 </Text>
                        <Text style={{ textAlign: 'center' }}>Total amount </Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: '600', textAlign: 'center' }}>Aug. 25th, 2024 </Text>
                        <Text style={{ textAlign: 'center' }}>Est. Delivery Date </Text>
                    </View>
                </View>

                <Ionicons name='checkmark-done-circle-sharp' size={60} color='black'
                    style={{ position: 'absolute', top: -30, right: '43%' }} />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <TheOrderCard />
                <UseableButton actionable={goToOrders} bgcolor='black' textcolor='white' title='Track Order' padding={20} mT={30} />
            </View>
            <UseableButton actionable={rateApp} textcolor='black' title='Rate this app' />
            <UseableButton actionable={writeAReview} textcolor='black' title='Leave a review ' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 20,
        backgroundColor: '#ece7e4',
    },
})