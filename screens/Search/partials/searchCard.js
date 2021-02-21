import React from 'react'
import styles from '../styles/card'
import { StyleSheet, Text, Image, View } from 'react-native'

const Card = ({img,channel,title}) => {
  return (
    <View style={styles.container}>
      <Image
       style={styles.img}
       source={{uri:img}}
      />
       <View style={styles.infContainer}>
         <Text
          numberOfLines={3}
          style={styles.title}
          >{title}</Text>
         <Text style={styles.channel}>{channel}</Text>
       </View>
    </View>
  )
}

export default Card
