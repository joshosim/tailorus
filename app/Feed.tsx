import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { DataList } from '@/utils/data-list'
import Tweet from '@/components/Tweet'
import { useNavigation } from '@react-navigation/native'

export default function Feed() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <Text style={{ fontWeight: 700, fontSize: 25, marginBottom: 10 }}>Tailorus</Text>
                <Pressable onPress={() => navigation.navigate('Settings')}>
                    <Image
                        source={require("../assets/images/profile.jpg")}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                    />
                </Pressable>
            </View>

            <View style={{
                flexDirection: 'row', alignItems: 'center', gap: 8, marginVertical: 20,
            }}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', gap: 2,
                    backgroundColor: 'white', borderRadius: 10, width: '84%', paddingHorizontal: 10
                }}>
                    <Ionicons name='search' color='black' size={25} />
                    <TextInput style={styles.textInput} placeholder='Search Style...' />
                </View>
                <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 10 }}>
                    <Ionicons name='filter' color='black' size={30} />
                </View>
            </View>

            <Text style={{ marginLeft: 6, fontWeight: 700, marginBottom: 10, fontSize: 20 }}>Design Collections</Text>

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
        paddingVertical: 15,
        paddingLeft: 5
    }
})