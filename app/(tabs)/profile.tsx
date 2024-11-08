import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Inventories from '@/components/Inventories'
import Preferences from '@/components/Preferences'

export default function Profile() {
    const TopView = () => {
        return (
            <View style={styles.topView}>
                <Image
                    style={styles.userPhoto}
                    source={require('../../assets/images/profile.jpg')}
                />
                <Text style={styles.username}>Osim Uka</Text>
                <Text style={styles.email}>osimukaokpan@gmail.com</Text>
                <Pressable style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                </Pressable>
            </View>
        )

    }
    return (
        <View style={styles.container}>
            <TopView />
            <Text>Inventories</Text>
            <Inventories />
            <Text>Preferences</Text>
            <Preferences />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    topView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70
    },
    username: {
        fontWeight: '700',
        fontSize: 20,
        marginVertical: 5
    },
    email: {
        color: '#afafaf',
        fontSize: 14
    },
    editButton: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginVertical: 10
    },
    editButtonText: { color: 'white', },
    userPhoto: {
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: '#f2f2f2',
        borderColor: '#ccc',
        borderWidth: 1,
        overflow: 'hidden',
    },
})