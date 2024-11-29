import {
    Pressable, Image,
    StyleSheet, Text, View
} from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function StartPage() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/product.jpg')}
                style={styles.image} />
            <Text style={{ fontWeight: 800, fontSize: 20, marginVertical: 20 }}>Tailorus, Less Stress, Sew More</Text>
            <Pressable onPress={() => navigation.navigate('TabsGroup')}
                style={styles.welcomeBtn}>
                <Text style={{ color: 'white', fontSize: 18 }}>Welcome</Text>
                <Ionicons name='arrow-forward' size={25} color='white' />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    welcomeBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'blue',
        padding: 14,
        width: '100%',
        borderRadius: 10,
        justifyContent: 'center'
    },
    image: {
        height: 160,
        width: 160,
        objectFit: 'cover',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 40,
    }
})