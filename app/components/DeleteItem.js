import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function DeleteItem({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={35} color='#fff' />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'hotpink',
    marginTop: 10,
    width: 70,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
})

export default DeleteItem
