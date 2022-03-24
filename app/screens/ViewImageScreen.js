import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native'
import AppText from '../components/AppText'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={require('../assets/logo.jpg')} />
      <AppText style={styles.text}>Thie is my first, React native app</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    flex: 1,
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  text: {
    flex: 1,
    position: 'absolute',
    bottom: 100,
    // zIndex: 10,
  },
})
export default ViewImageScreen
