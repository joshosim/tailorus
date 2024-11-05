import { Image, StyleSheet, Platform, View, Text, TextInput, ScrollView, FlatList } from 'react-native';

import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

type CardProps = {
  title: string,
  design: number,
  url: string
}

export default function HomeScreen() {

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

  const DataList: CardProps[] = [
    {
      title: 'Suits',
      design: 25,
      url: 'https://www.pexels.com/photo/stylish-woman-posing-in-sportwear-ensemble-28744548/'
    },
    {
      title: 'Two Piece',
      design: 25,
      url: 'https://www.pexels.com/photo/portrait-of-man-in-sunglasses-wearing-orange-shirt-outdoors-29205214/ '
    },
    {
      title: 'Polo',
      design: 25,
      url: 'https://www.pexels.com/photo/athletic-male-in-stylish-activewear-on-rooftop-29205185/'
    },
    {
      title: 'Native',
      design: 25,
      url: 'https://www.pexels.com/photo/athletic-male-in-stylish-activewear-on-rooftop-29205185/'
    },
    {
      title: 'Skirt',
      design: 25,
      url: 'https://www.pexels.com/photo/athletic-male-in-stylish-activewear-on-rooftop-29205185/'
    },
    {
      title: 'Jeans',
      design: 25,
      url: 'https://www.pexels.com/photo/athletic-male-in-stylish-activewear-on-rooftop-29205185/'
    },
    {
      title: 'Adgbada',
      design: 25,
      url: 'https://www.pexels.com/photo/athletic-male-in-stylish-activewear-on-rooftop-29205185/'
    },
  ]

  const ShowroomCard = ({ design, title, url }: CardProps) => {
    return (
      <View style={styles.showroomCard}>
        <Image
          style={styles.showroomImage}
          source={require('./../../assets/images/product.jpg')}
        />
        <View style={styles.showroomDetails}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{design} Designs</Text>
        </View>
      </View>
    )
  }

  const DisplayShowRoom = () => {
    return (
      <FlatList
        data={DataList}
        renderItem={({ item }) => <ShowroomCard {...item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          // Space between columns
        }}
        contentContainerStyle={{ alignItems: 'center' }}
        keyExtractor={(item) => item.title} />
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topValues}>
        <View style={styles.userInfo}>
          <Image
            style={styles.userPhoto}
            source={require('./../../assets/images/profile.jpg')}
          />
          {/* <Image style={styles.userPhoto} source={{
            uri: 'https://www.pexels.com/photo/woman-in-collared-shirt-774909/'
          }} /> */}
          <View>
            <Text style={{ fontWeight: '800', fontSize: 18 }}>Hi Tomiwa,</Text>
            <Text style={{ fontWeight: '800', fontSize: 18 }}>Good Morning</Text>
          </View>
        </View>
        <View>
          <Ionicons name='notifications' size={25} color='green' />
        </View>
      </View>
      <SearchInputBar />
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 12 }}>Showroom</Text>
      <DisplayShowRoom />
    </ScrollView >
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
    width: '48%',

  },
  showroomImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
  },
  showroomDetails: {
    width: '100%',
  },
  showroom: {
    width: '100%',
  }
});
