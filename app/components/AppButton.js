import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

const AppButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // style={[styles.container, { backgroundColor: colors[color] }]}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.priamaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    width: '100%',
    marginBottom: 5,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
})
export default AppButton
