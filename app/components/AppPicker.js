import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Text,
  Button,
} from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from '../components/AppText'
import AppScreen from './AppScreen'

function AppPicker({ icon, placeholder }) {
  const [isVisible, setIsVisible] = useState(false)
  console.log(isVisible)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={styles.container}>
          <View style={styles.category}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={30}
                color={colors.secondaryColor}
                style={styles.icon}
              />
            )}
            <AppText style={styles.text}>{placeholder}</AppText>
          </View>

          <MaterialCommunityIcons
            name='chevron-down'
            size={30}
            color={colors.secondaryColor}
          />
        </View>
      </TouchableWithoutFeedback>
      <AppScreen>
        <Modal visible={isVisible} animationType='slide'>
          <View>
            <Text style={{ marginTop: 200 }}></Text>
            <Button title='back' onPress={() => setIsVisible(false)} />
          </View>
        </Modal>
      </AppScreen>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayColor,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: colors.smokyBlackColor,
  },
  category: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    letterSpacing: 2,
    color: colors.smokyBlackColor,
  },
})

export default AppPicker
