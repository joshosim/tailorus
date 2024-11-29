import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TweetContent, { TweetContent2 } from './TweetContent'
import { useNavigation } from '@react-navigation/native'


export default function Tweet({ product }: { product: any }) {

    const navigation = useNavigation()
    return (
        <Pressable key={product.id} onPress={() => navigation.navigate('FeedType', { product })}
            style={{ width: '47%', marginHorizontal: '2%', marginBottom: 10 }}>
            <TweetContent product={product} />
        </Pressable>
    )
}
export function Tweet2({ product }: { product: any }) {

    const navigation = useNavigation()
    return (
        <Pressable key={product.id} onPress={() => navigation.navigate('FeedDetails', { product })}
            style={{ width: '47%', marginHorizontal: '2%', marginBottom: 10 }}>
            <TweetContent2 product={product} />
        </Pressable>
    )
}

const styles = StyleSheet.create({})