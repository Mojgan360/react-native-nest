import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

const ListingDetailsScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/logo.jpg')} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Title</Text>
          <Text style={styles.price}>100 €</Text>
        </View>
      </View>
      <ListItem
        image={require('../assets/logo.jpg')}
        name='Mojgan'
        description='5 user'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayColor,
    borderRadius: 20,
    margin: 10,
    overflow: 'hidden',
    marginTop: 100,
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    margin: 10,
  },
  price: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
  },
})

export default ListingDetailsScreen
