import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TileProps } from '@/utils/types/tileProps.types'
import { Ionicons } from '@expo/vector-icons'

export default function Inventories() {

    const Tile = ({ onClick, startIcon, text, endIcon }: TileProps) => {
        return (
            <Pressable onPress={onClick} style={styles.tile}>
                <View style={styles.innerTile}>
                    <View style={styles.startIcon}>
                        {startIcon}
                    </View>
                    <Text>{text}</Text></View>
                <View>
                    {endIcon}
                </View>
            </Pressable>
        )
    }

    const Divider = () => <View style={styles.divider} />

    return (
        <View style={styles.container}>
            <Tile onClick={() => { }} text='My stories'
                startIcon={<Ionicons name='home-sharp' size={20} color='black' />}
                endIcon={<Ionicons name='arrow-forward' size={20} color='black' />} />
            <Divider />
            <Tile onClick={() => { }} text='Support' startIcon={<Ionicons name='radio-outline' size={20} color='black' />} endIcon={<Ionicons name='arrow-forward' size={20} color='black' />} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        padding: 10,
        backgroundColor: '#afafaf',
        borderRadius: 20,
        borderColor: '#ece4e7',
        borderStyle: 'solid',
        borderWidth: 1
    },
    tile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    innerTile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    startIcon: {
        backgroundColor: 'white',
        padding: 4,
        borderColor: '#ece4e7',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },
    divider: {
        height: 2,
        color: '#ece4e7',
        marginVertical: 4
    }
})