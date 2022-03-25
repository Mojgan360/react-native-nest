import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import AppScreen from '../components/AppScreen'
import ListItem from '../components/ListItem'
import AppIcone from '../components/AppIcone'
import Colors from '../config/colors'
import colors from '../config/colors'

const infoData = [
  {
    title: 'title1',
    icon: {
      name: 'email',
      bgColor: colors.priamaryColor,
      iconeColor: colors.secondaryColor,
    },
    description: 'description',
  },
  {
    title: 'title2',
    icon: {
      name: 'format-list-bulleted',
      bgColor: colors.secondaryColor,
      iconeColor: colors.priamaryColor,
    },
    description: 'description',
  },
]
const AccountScreen = () => {
  return (
    <AppScreen style={styles.container}>
      <View>
        <ListItem
          name='Doris'
          description='doris@info.uk'
          image={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={infoData}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#808080',
                  }}
                />
              )}
              name={item.title}
              ImageComponent={
                <AppIcone
                  size={60}
                  bgColor={item.icon.bgColor}
                  name={item.icon.name}
                  iconeColor={item.icon.iconeColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          ImageComponent={
            <AppIcone
              name='logout'
              bgColor={colors.yellowColor}
              iconeColor={colors.smokyBlackColor}
              size={70}
            />
          }
        />
      </View>
    </AppScreen>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayColor,
  },
  listWrapper: {
    backgroundColor: '#fff',
  },
  logout: {
    position: 'absolute',
    bottom: 30,
  },
})

export default AccountScreen
