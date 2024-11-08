import { Image, StyleSheet, Platform, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';

import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CardProps } from '@/utils/types/cardProps.types';
import { DataList } from '@/utils/data-list';

import { NavigationProp } from '@react-navigation/native';
import { Link } from 'expo-router';

const width = Dimensions.get('window').width / 2 - 30;

export default function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {

  const SearchInputBar = () => {
    return (
      <View style={styles.textInput}>
        <Ionicons name='search' size={25} color='black' />
        <TextInput
          style={{
            flex: 1,
            paddingHorizontal: 10,
            backgroundColor: 'transparent',
            borderRadius: 5,
            fontSize: 16
          }}
          placeholder='Search...'
        />
      </View>
    )
  }

  const ShowroomCard = ({ design, title, url }: CardProps) => {
    return (
      <Link style={styles.showroomCard} href="/details">
        <Image
          style={styles.showroomImage} source={url}
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
      <View style={styles.topValues}>
        <View style={styles.userInfo}>
          <Image
            style={styles.userPhoto}
            source={require('./../../assets/images/profile.jpg')}
          />
          <View>
            <Text style={{ fontWeight: '800', fontSize: 18 }}>Hi Tomiwa,</Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Good Morning</Text>
          </View>
        </View>
        <View>
          <Ionicons name='notifications' size={25} color='green' />
        </View>
      </View>
      <SearchInputBar />
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 12, marginLeft: 5 }}>Showroom</Text>
      <DisplayShowRoom />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  topValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
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
  textInput: {
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
    height: 225,
    marginHorizontal: 2,
    borderRadius: 10,
    padding: 15,//you might consider removing thi padding after viewing the output code
  },
  showroomImage: {
    flex: 1,
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

});
