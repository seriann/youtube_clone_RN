import React from 'react'
import styles from '../styles/card'
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native'
import { useTheme } from 'react-native-paper'
import normalize from 'react-native-normalize';

const Card = ({img,channel,title}) => {
  const theme = useTheme()
  return (
    <View
    style={{
      flex:1,
      flexDirection:'row',
      padding:"3%",
      backgroundColor:theme.colors.background
    }}>
      <Image
       style={styles.img}
       source={{uri:img}}
      />
       <View style={styles.infContainer}>
         <Text
          numberOfLines={3}
          style={{
            fontWeight:'bold',
            fontSize:normalize(18),
            width:Dimensions.get('screen').width - normalize(200),
            color:theme.colors.text
          }}
          >{title}</Text>
         <Text style={styles.channel}>{channel}</Text>
       </View>
    </View>
  )
}

export default Card
