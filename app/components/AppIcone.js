import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const AppIcone = ({ size, name, bgColor, iconeColor }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
        borderRadius: size / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <MaterialCommunityIcons name={name} size={40} color={iconeColor} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {},
})

export default AppIcone
