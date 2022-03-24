import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native'
import AppCard from '../components/AppCard'
const CardScreen = () => {
  const img = require('../assets/ckock.jpg')

  return (
    <View style={styles.container}>
      <Text>CardScreen</Text>
      <AppCard image={img} title='this is title' price='100 €' />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    padding: 2,
    paddingTop: 100,
    height: '100%',
  },
})
export default CardScreen
