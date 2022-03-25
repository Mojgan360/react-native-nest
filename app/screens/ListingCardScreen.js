import React from 'react'
import { View, Text, FlatList } from 'react-native'
import AppCard from '../components/AppCard'
import AppScreen from '../components/AppScreen'
import ListItem from '../components/ListItem'

const sellList = [
  {
    id: 1,
    title: 'selling a',
    price: 25,

    // uri: require({
    image:
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80g',

    // image: require('../assets/logo.jpg'),
  },
  {
    id: 2,
    title: 'Clock',
    price: 25,
    image:
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80',
  },
]
const ListingCardScreen = () => {
  return (
    <AppScreen>
      <FlatList
        data={sellList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            name={item.title}
            image={{ uri: item.image }}
            title={item.title}
            price={`€ ${item.price}`}
          />
        )}
      />
    </AppScreen>
  )
}

export default ListingCardScreen
