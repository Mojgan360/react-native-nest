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
import ListItem from '../components/ListItem'

const MessageScreen = () => {
  return (
    <AppScreen>
      <ListItem
        name='sam'
        description='nnnnn'
        ImageComponent={
          <AppIcone size={60} name='email' bgColor='green' iconeColor='gold' />
        }
      />
    </AppScreen>
  )
}

export default MessageScreen
