import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

export default function TweetContent({ product }: any) {

    return (
        <View>
            <Image source={product.url}
                style={{ height: 150, width: '100%', borderRadius: 10, objectFit: 'cover' }} />
            <Text style={{ fontWeight: 600 }}>{product.title}</Text>
            <Text>{product.design}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rowAction: {},
    elemAction: {},
    actionButton: {},
    actionText: {},

})