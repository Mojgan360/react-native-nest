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
import AppButton from '../components/AppButton'
const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      resizeMode='cover'
      style={styles.image}
    >
      {/* <Button
        title='Go to Details'
        onPress={() => navigation.navigate('TweetsDetails')}
      /> */}
      <Image style={styles.logo} source={require('../assets/logo.jpg')} />
      <View style={styles.btnContainer}>
        <AppButton
          title='Log In'
          onPress={() => console.log('login')}
          color={colors.secondaryColor}
        />
        <AppButton
          title='Sign Up'
          onPress={() => console.log('signup')}
          color={colors.secondaryColor}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btnContainer: {
    width: '100%',
    padding: 20,
  },

  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 50,
  },
})
export default WelcomeScreen
