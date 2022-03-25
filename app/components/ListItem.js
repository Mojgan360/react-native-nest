import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const ListItem = ({
  image,
  name,
  description,
  renderRightActions,
  ImageComponent,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity>
          <View style={styles.userContainer}>
            {ImageComponent}

            {image && <Image style={styles.userImage} source={image} />}
            <View style={styles.infoWrapper}>
              <Text style={styles.userInfo}>{name}</Text>
              {description && (
                <Text style={styles.description}>{description}</Text>
              )}
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
    marginHorizontal: 10,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
  },
  infoWrapper: {
    marginLeft: 10,
  },
  userInfo: {
    color: 'blue',
  },
  description: {
    color: '#808080',
  },
})
export default ListItem
