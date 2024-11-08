import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { DetailsCardProps } from '@/utils/types/detailsCardProps.types'
import { DataList } from '@/utils/data-list'
import { NavigationProp, RouteProp, } from '@react-navigation/native'
import { Link } from 'expo-router'

const width = Dimensions.get('window').width / 2 - 30;

const Details = ({ navigation, route }: { navigation: NavigationProp<any>, route: RouteProp<any, any> }) => {

    const goBack = () => {
        navigation.goBack()
    }
    const GoBackAction = () => <Ionicons onPress={goBack} name='arrow-back' size={30} color='black' />


    const SearchInputBar = () => {
        return (
            <View style={{ alignItems: 'center', flexDirection: 'row', gap: 10, width: '100%' }}>
                <View style={styles.textInput}>
                    <Ionicons name='search' size={25} color='black' />
                    <TextInput
                        style={{

                            paddingHorizontal: 10,
                            backgroundColor: 'transparent',
                            borderRadius: 5,
                            fontSize: 16
                        }}
                        placeholder='Search...'
                    />
                </View>
                <View style={{ backgroundColor: '#f2f2f2', padding: 10, marginTop: -10, borderRadius: 10, }}>
                    <Ionicons name='filter' size={25} color='black' />
                </View>
            </View>
        )
    }

    const ShowroomCard = ({ design, title, url }: DetailsCardProps) => {
        return (
            <Link href='/detailedProduct' style={styles.showroomCard} >
                <Image
                    style={styles.showroomImage}
                    source={require('./../assets/images/showroom/s-4.jpg')}
                />
                <View style={styles.showroomDetails}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}>{design} Designs</Text>
                </View>
            </Link>
        )
    }

    const DisplayShowRoom = () => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DataList}
                renderItem={({ item }) => <ShowroomCard {...item} />}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                }}
                contentContainerStyle={{ alignItems: 'center' }}
                keyExtractor={(item) => item.title} />
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', gap: 8 }}>
                <GoBackAction />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Agbabda Designs</Text>
            </View><SearchInputBar />
            <DisplayShowRoom />
        </View>
    )
}

export default Details



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    textInput: {
        width: '85%',
        backgroundColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
    },
    showroomCard: {
        width,
        marginBottom: 20,
        marginHorizontal: 2,
        height: 225,
        borderRadius: 10,
    },
    showroomImage: {
        height: 150,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 4,
        shadowColor: '#000',
    },
    showroomDetails: {
        width: '100%',
    },
    showroom: {
        width: '100%',
    },


})