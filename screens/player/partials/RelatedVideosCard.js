import React from 'react'
import styles from '../styles/RVCards.js'
import { View,Text, Image } from 'react-native'
import { errImg } from '../../../constImages/index'

const RealtedVideos = ({img, channel, title}) => {
  return(
    <View style={styles.container}>
      <Image
       style={styles.img}
       source={{uri:img !== ""? img: errImg}}
      />
       <View style={styles.infContainer}>
         <Text
          numberOfLines={2}
          style={styles.title}
         >{title}</Text>
         <Text style={styles.channel}>{channel}</Text>
       </View>
    </View>
  )
}

export default RealtedVideos
