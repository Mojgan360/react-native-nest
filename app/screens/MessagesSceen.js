import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'

import Constants from 'expo-constants'

import ListItem from '../components/ListItem'
import AppScreen from '../components/AppScreen'
import DeleteItem from '../components/DeleteItem'

const msg = [
  {
    id: 1,
    img: require('../assets/bg.jpg'),
    name: 'T1',
    description: 'd1',
  },
  {
    id: 2,
    img: require('../assets/logo.jpg'),

    name: 'T2',
    description: 'd1',
  },
]
const MessagesSceen = () => {
  console.log(Constants)
  return (
    <AppScreen>
      <FlatList
        data={msg}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            image={item.img}
            name={item.name}
            description={item.description}
            renderRightActions={DeleteItem}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{ height: 1, width: '100%', backgroundColor: '#808080' }}
          />
        )}
      />
    </AppScreen>
  )
}
// const styles = StyleSheet.create({
// screen: {
// paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
// paddingTop: Constants.statusBarHeight,
// },
// })
export default MessagesSceen
