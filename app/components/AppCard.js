import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native'
import colors from '../config/colors'
const AppCard = ({ image, title, price }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayColor,
    borderRadius: 20,
    margin: 10,
    overflow: 'hidden',
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

export default AppCard
