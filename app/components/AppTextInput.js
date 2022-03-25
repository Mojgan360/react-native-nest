import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

import AppIcon from './AppIcone'
import colors from '../config/colors'

function AppTextInput({
  placeholder,
  width = '100%',
  iconType,
  iconSize = 30,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }]}>
      <AppIcon
        name={iconType}
        size={iconSize}
        backgroundColor={colors.priamaryColor}
        color={colors.grayColor}
      />
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        {...otherProps}
      />
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
    shadowColor: colors.priamaryColor,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    marginLeft: 10,
    flex: 1,
  },
})

export default AppTextInput
