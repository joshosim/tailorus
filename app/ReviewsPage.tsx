import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import ReviewCard, { ReviewData } from '@/components/ReviewCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReviewsPage() {

    const [review, setReview] = useState('');


    const handleSubmit = () => {
        if (!review) {
            alert('Please fill a review!');
            return;
        }

        const newReview = {
            id: ReviewData.length + 1,
            message: review,
            author: 'Osim',
            profileImg: require('../assets/images/profile.jpg'), // Use default image for now
        };

        ReviewData.unshift(newReview);

        setReview('');
    };

    // Review form component
    const ReviewForm = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.label}>Review:</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    value={review}
                    onChangeText={(text) => setReview(text)}
                    placeholder="Write your review here"
                    multiline
                />
                <Pressable style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit Review</Text>
                </Pressable>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Write a Review</Text>
            <FlatList
                horizontal
                data={ReviewData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ReviewCard item={item} />}
                contentContainerStyle={styles.flatList}
                showsHorizontalScrollIndicator={false}
            />
            <ReviewForm />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ece7e4',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    flatList: {
        marginBottom: 20,
    },
    formContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
