import React from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function AppTextInput({ icon, ...othersProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={30}
          color={colors.secondaryColor}
          style={styles.icon}
        />
      )}

      <TextInput style={StyleSheet.textInput} {...othersProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayColor,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: colors.smokyBlackColor,
  },
  textInput: {
    fontSize: 18,
    // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    letterSpacing: 2,
    color: colors.smokyBlackColor,
    color: 'red',
  },
  icon: {
    marginRight: 5,
  },
})

export default AppTextInput
