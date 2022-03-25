import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>
}
// Platform.select({
//   ios: {
//     fontFamily: 'Avenir',
//   },
// })
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
})

export default AppText
