import React from 'react'
import styles from '../styles/index'
import { View,Text } from 'react-native'

const Main = ({user}) => {
  return (
    <View>
      <Text>{user.user}</Text>
    </View>
  )
}

export default Main
