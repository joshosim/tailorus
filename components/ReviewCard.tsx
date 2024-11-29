import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export const ReviewData = [
    {
        id: 1,
        message: 'The custom fit was absolutely perfect! I’ve never had a suit feel so comfortable.',
        author: 'James W.',
        profileImg: require('../assets/images/profile.jpg'),
    },
    {
        id: 2,
        message: 'Amazing craftsmanship and attention to detail. The dress exceeded my expectations!',
        author: 'Sophia A.',
        profileImg: require('../assets/images/profile.jpg'),
    },
    {
        id: 3,
        message: 'Fast service and excellent quality! The tailoring was spot on.',
        author: 'Liam O.',
        profileImg: require('../assets/images/profile.jpg'),
    },
    {
        id: 4,
        message: 'I loved how they listened to every detail I wanted. My outfit is perfect!',
        author: 'Emma T.',
        profileImg: require('../assets/images/profile.jpg'),
    },
    {
        id: 5,
        message: 'This app makes it so easy to book fittings and track my orders. Great experience!',
        author: 'Oliver P.',
        profileImg: require('../assets/images/profile.jpg'),
    },
];

export default function ReviewCard({ item }: { item: any }) {
    return (
        <View style={styles.card}>
            <Text style={styles.message}>"{item.message}"</Text>
            <View style={styles.authorContainer}>
                <Image source={item.profileImg} style={styles.profileImg} />
                <Text style={styles.author}>{item.author}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        width: 250,
        height: 250,
        marginRight: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
    },
    message: {
        fontSize: 14,
        marginBottom: 10,
        fontStyle: 'italic',
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    profileImg: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    author: {
        fontWeight: 'bold',
        fontSize: 14,
    },
});
