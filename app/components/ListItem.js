import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
const ListItem = ({ image, name, description, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity>
        <View style={styles.userContainer}>
          <Image
            style={styles.userImage}
            // source={require(image)}
            source={image}
          />
          <View>
            <Text style={styles.userInfo}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
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
