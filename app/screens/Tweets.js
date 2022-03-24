import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Screen,
  Button,
} from 'react-native'

const Tweets = ({ navigation }) => {
  return (
    <View>
      Tweets
      <Button
        Title='View Tweet'
        onPress={() => {
          navigation.navigate('TweetsDetails')
        }}
      />
    </View>
  )
}

export default Tweets
