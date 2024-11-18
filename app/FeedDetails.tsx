import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RouteProp, useNavigation } from '@react-navigation/native'
import TweetContent from '@/components/TweetContent'
import { Ionicons } from '@expo/vector-icons'

export default function FeedDetails({ route }: { route: RouteProp<any, 'FeedDetails'> }) {

    const { product } = route.params;
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 15 }}>
                <Ionicons onPress={goBack} name='arrow-back' size={25} />
                <Text style={{ fontWeight: 700, fontSize: 18 }}>{product.title}</Text>
            </View>

            <TweetContent product={product} />
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