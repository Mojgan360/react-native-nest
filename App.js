// import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native'
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './app/screens/WelcomeScreen'
import Tweets from './app/screens/Tweets'
import TweetsDetails from './app/screens/TweetsDetails'
import ViewImageScreen from './app/screens/ViewImageScreen'
import CardScreen from './app/screens/CardScreen'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesSceen from './app/screens/MessagesSceen'
import MessageScreen from './app/screens/MessageScreen'
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <MessageScreen />
    // <ListingDetailsScreen />
    // <CardScreen />
    // <ViewImageScreen />
    // <WelcomeScreen />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={WelcomeScreen} />
    //     <Stack.Screen name='TweetsDetails' component={TweetsDetails} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
