import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AppPicker from '../AppPicker'
import AppScreen from '../AppScreen'
import AppTextInput from '../AppTextInput'

const InputComponent = () => {
  const [firstName, setFirstName] = useState('')

  return (
    <AppScreen>
      <View style={styles.container}>
        <AppPicker placeholder='Category' icon='apps' />
        <AppTextInput placeholder='Email' icon='email' />
      </View>
    </AppScreen>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
})
export default InputComponent
