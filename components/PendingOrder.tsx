import React from "react"
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import OrderCard from "./OrderCard";

const PendingOrder = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                {[1, 2].map((_, i) => <OrderCard key={i} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

export default PendingOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})