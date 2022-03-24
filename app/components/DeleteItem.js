import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function DeleteItem() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='trash-can' size={35} color='#fff' />
    </View>
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
