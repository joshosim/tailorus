import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { PlanProps } from '@/utils/types/planProps'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'


const DetailedProduct = () => {

    const route = useRoute()
    const value = route.params
    const navigation = useNavigation()

    const [like, setLike] = useState(false)

    const onClickLike = () => {
        setLike(!like)
    }

    const DisplayImage = () => {
        return (
            <View>
                <Image
                    style={styles.showroomImage}
                    source={require('./../assets/images/showroom/s-4.jpg')}
                />
                <View style={{ margin: 15, position: 'absolute' }}>
                    <GoBackAction />
                </View>
            </View>
        )
    }

    const Plan = ({ duration, planType, price }: PlanProps) => {
        return (
            <View style={{
                backgroundColor: '#f4f4f4', padding: 10, borderRadius: 5, width: '45%'
            }}>
                <Text>{planType}</Text>
                <Text style={{ fontWeight: 'bold' }}>NGN {price}</Text>
                <Text>{duration}</Text>
            </View>
        )

    }

    const TailorCard = () => {
        return (
            <View style={{ backgroundColor: '#f4f4f4', borderRadius: 10, margin: 10, padding: 10, position: 'relative' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <Image
                        style={styles.userPhoto}
                        source={require('./../assets/images/profile.jpg')}
                    />
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Yomi Casuals</Text>
                        <Text style={{ flexDirection: 'row', alignItems: 'center' }}><Ionicons name='star' size={20} color='yellow' /> 4.8 (5.0)</Text>
                    </View>
                </View>
                <Text style={{ marginVertical: 8, alignItems: 'center', flexDirection: 'row', gap: 8 }}> <Ionicons name='location-outline' size={20} color='black' />Ikeja Lagos</Text>
                <Text style={{ alignItems: 'center', flexDirection: 'row', gap: 8 }}> <Ionicons name='calendar-outline' size={20} color='black' />Joined 2nd April 2022</Text>
                <View style={{
                    position: 'absolute', top: 10, right: 0,
                    padding: 5, backgroundColor: '#afafaf', borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
                    flexDirection: 'row', gap: 6, alignItems: 'center'
                }}>
                    <Ionicons name='chatbox' size={20} color='purple' style={{ marginTop: 5 }} />
                    <Text>Inquire</Text>
                </View>
            </View>
        )
    }
    const goBack = () => {
        navigation.goBack()
    }
    const GoBackAction = () => <Ionicons onPress={goBack} name='arrow-back' size={30} color='black' />


    return (
        <SafeAreaView style={{ backgroundColor: 'white', position: 'relative' }}>
            <DisplayImage />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10 }}>
                <Text style={{ fontWeight: '800', fontSize: 20 }}>Royal Lemon Agbada</Text>
                <View style={{ flexDirection: 'row', gap: 4 }}>
                    <Ionicons name={like ? "heart" : 'heart-outline'} size={25} color={like ? 'red' : 'black'} onPress={onClickLike} />
                    <Ionicons name='share-social-outline' size={25} color='black ' />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', gap: 12, margin: 10 }}>
                <Plan duration='2 Weeks' planType='Normal' price='244000' />
                <Plan duration='1 Week' planType='Express' price='312000' />
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <Text style={{ textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Excepturi, quod itaque? Quidem nostrum hic inventore ducimus
                    doloremque, omnis, alias provident quas labore nisi libero magni consequatur,
                    assumenda repellendus odit optio!</Text>
            </View>
            <TailorCard />
        </SafeAreaView>
    )
}

export default DetailedProduct

const styles = StyleSheet.create({
    showroomImage: {
        height: 280,
        width: '100%',
        resizeMode: 'cover',
        marginBottom: 4,
    },
    userPhoto: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#f2f2f2',
        borderColor: '#ccc',
        borderWidth: 1,
        overflow: 'hidden',
    },
})