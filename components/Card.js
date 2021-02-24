import React from 'react'
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native'
import { Avatar, useTheme } from 'react-native-paper';
import normalize from 'react-native-normalize';

const Card = ({img, channel, imgChannel, title}) => {
  const theme = useTheme()
  return (
    <View style={{
     flex:1,
     flexDirection:'column',
     backgroundColor:theme.colors.background,
     marginBottom:'2%'
    }}>
      <View>
         <Image
         style={styles.img}
          source={{uri:img}}
          />
       </View>
       <View style={styles.infContainer}>
          <Avatar.Image style={{marginHorizontal:"2%"}} size={50} source={{uri:imgChannel}}/>
           <View style={styles.channelInfContainer}>
             <Text
              numberOfLines={2}
              ellipsizeMode='tail'
              style={{
                fontWeight:'bold',
                fontSize:normalize(18),
                width:Dimensions.get('screen').width - normalize(100),
                color:theme.colors.text
              }}>{title}</Text>
             <Text style={styles.channel}>{channel}</Text>
           </View>
       </View>
     </View>
  )
}
const styles = StyleSheet.create({
  img:{
    width:"100%",
    height:normalize(180),
  },
  infContainer:{
    flexDirection:'row',
    margin:"1%"
  },
  channelInfContainer:{
    flexDirection:'column'
  },
  channel:{
    fontSize:normalize(17),
    color:'grey'
  }

})

export default Card
