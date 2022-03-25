import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const ListItem = ({ image, name, description, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity>
          <View style={styles.userContainer}>
            <Image style={styles.userImage} source={image} />
            <View>
              <Text style={styles.userInfo}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  userContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
  },
  userInfo: {
    color: 'blue',
  },
  description: {
    color: '#808080',
  },
})
export default ListItem
