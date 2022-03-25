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
import Constants from 'expo-constants'

const AppScreen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
})
export default AppScreen
