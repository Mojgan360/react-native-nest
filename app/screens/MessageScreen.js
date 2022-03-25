import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'
import AppIcone from '../components/AppIcone'
import AppScreen from '../components/AppScreen'

const MessageScreen = () => {
  return (
    <AppScreen>
      <AppIcone size={60} name='email' bgColor='green' iconeColor='gold' />
    </AppScreen>
  )
}

export default MessageScreen
