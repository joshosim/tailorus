import React from "react"
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import OrderCard from "./OrderCard";

const CompletedOrder = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                {[1, 2, 3].map((_, i) => <OrderCard key={i} />)}
            </ScrollView>
        </SafeAreaView>
    )
}

export default CompletedOrder;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})