import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { tweets } from './data/tweets'
import { DataList } from '@/utils/data-list'
import Tweet from '@/components/Tweet'

export default function Feed() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontWeight: 700, fontSize: 25, marginBottom: 10 }}>Tailorus</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../assets/images/profile.jpg")}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                    />
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginVertical: 20 }}>
                <TextInput style={styles.textInput} />
                <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 10 }}>
                    <Ionicons name='filter' color='black' size={30} />
                </View>
            </View>
            <View style={{ marginBottom: 10 }}>
                <FlatList
                    data={DataList}

                    renderItem={({ item }) => <Tweet product={item} />}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
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
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 100
    },
    textInput: {
        width: '85%',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 15
    }
})