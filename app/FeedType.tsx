import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DataList } from '@/utils/data-list'
import Tweet, { Tweet2 } from '@/components/Tweet'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function FeedType({ route }: { route: RouteProp<any, "FeedType"> }) {

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
            <View style={{ marginBottom: 10 }}>
                <FlatList
                    data={product.subTypes}
                    renderItem={({ item }) => <Tweet2 product={item} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.title}
                />
            </View>
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