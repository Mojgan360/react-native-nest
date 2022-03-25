import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import AppScreen from '../AppScreen'
import AppTextInput from '../AppTextInput'

const InputComponent = () => {
  const [firstName, setFirstName] = useState('')

  return (
    <AppScreen>
      <View style={styles.container}>
        <Text>{firstName}</Text>
        <TextInput
          placeholder='hello'
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
      <AppTextInput placeholder='first name' />
    </AppScreen>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
})
export default InputComponent
