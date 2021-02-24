import React from 'react'
import styles from '../styles/RVCards.js'
import { View,Text, Image, Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
import { errImg } from '../../../constImages/index'
import { useTheme } from 'react-native-paper'

const RealtedVideos = ({img, channel, title}) => {
  const theme = useTheme()
  return(
    <View style={styles.container}>
      <Image
       style={styles.img}
       source={{uri:img !== ""? img: errImg}}
      />
       <View style={styles.infContainer}>
         <Text
          numberOfLines={2}
          style={{
            width: width * .6,
            fontWeight:'bold',
            color:theme.colors.text
          }}
         >{title}</Text>
         <Text style={styles.channel}>{channel}</Text>
       </View>
    </View>
  )
}

export default RealtedVideos
