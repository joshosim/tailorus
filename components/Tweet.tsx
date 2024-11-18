import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TweetContent from './TweetContent'
import { useNavigation } from '@react-navigation/native'


export default function Tweet({ product }: { product: any }) {

    const navigation = useNavigation()
    return (
        <Pressable key={product.id} onPress={() => navigation.navigate('FeedDetails', { product })}
            style={{ width: '47%', marginHorizontal: '2%', marginBottom: 10 }}>
            <TweetContent product={product} />
        </Pressable>
    )
}

const styles = StyleSheet.create({})