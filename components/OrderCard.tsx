import React from "react"
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native"

const OrderCard = () => {

    return (
        <View style={{
            borderRadius: 10, backgroundColor: 'white', padding: 10,
            margin: 10,
        }} >
            <View>
                <Text style={{ fontWeight: 600, fontSize: 18 }}>Ankara Blouse</Text>

                <Text style={{ fontWeight: 400, fontSize: 12 }}>Amount</Text>
                <Text style={{ fontWeight: 500, fontSize: 18 }}>NGN 12000</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 20 }}>
                <View>
                    <Text style={{ fontWeight: 400, fontSize: 12 }}>Order Date</Text>
                    <Text style={{ fontWeight: 600, fontSize: 16 }}>12th Nov, 2024</Text>
                </View>

                <View>
                    <Text style={{ fontWeight: 400, fontSize: 12 }}>Expectation Time</Text>
                    <Text style={{ fontWeight: 600, fontSize: 16 }}>24th Nov, 2024</Text>
                </View>
            </View>

        </View >
    )
}

export default OrderCard;
