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
import { borderLeftColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'
const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={2}
      source={require('../assets/bg.jpg')}
      resizeMode='cover'
      style={styles.image}
    >
      {/* <Button
        title='Go to Details'
        onPress={() => navigation.navigate('TweetsDetails')}
      /> */}
      <View style={styles.bandContainer}>
        <Image style={styles.logo} source={require('../assets/logo.jpg')} />

        <Text style={styles.text}>Welcome!</Text>
      </View>

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

  bandContainer: {
    color: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 100,
  },
  logo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 25,
    color: colors.priamaryColor,
    fontWeight: 'bold',
    paddingVertical: 10,
    letterSpacing: 2,
  },
})
export default WelcomeScreen
