import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import React from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

export default function FeedDetails({ route }: { route: RouteProp<any, 'FeedDetails'> }) {

    const { product } = route.params;
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }

    const goToMeasurement = () => {
        navigation.navigate('Measurement', { product })
    }

    return (
        <View style={styles.container} key={product.id}>
            <Image source={product.image}
                style={{ height: 450, width: '100%', objectFit: 'cover' }} />
            <View style={{ padding: 10, flex: 1 }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <Text style={{ fontWeight: 600, fontSize: 18 }}>{product.title}</Text>
                    <Text style={{ fontWeight: 600, fontSize: 18 }}>NGN {product.price}</Text>
                </View>
                <Text>Delivery Time: {product.timeFrame}</Text>
                <Text>{product.description}</Text>

                <Text style={{ marginBottom: 10 }}>Available Colors</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    {product.availableColors.map((item: any) => (<Text style={{
                        fontWeight: 600, paddingHorizontal: 15, paddingVertical: 5
                        , backgroundColor: 'black', color: 'white', borderRadius: 10
                    }}>{item}</Text>))}
                </View>
                <Text style={{ marginVertical: 10 }}>Available Sizes</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    {product.availableSizes.map((item: any) => (<Text style={{
                        fontWeight: 600,
                        paddingHorizontal: 15, paddingVertical: 5, backgroundColor: 'black', color: 'white', borderRadius: 10
                    }}>{item}</Text>))}
                </View>
            </View>

            <Pressable onPress={goToMeasurement} style={{
                backgroundColor: 'black', padding: 15,
                margin: 10, borderRadius: 5
            }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Get this Design</Text>
            </Pressable>
            <Ionicons onPress={goBack} name='arrow-back' size={40} color='black'
                style={{ position: 'absolute', top: 20, left: 10, }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ece7e4',
        position: 'relative',
    },
})