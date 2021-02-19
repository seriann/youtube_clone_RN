import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { Avatar } from 'react-native-paper';
import normalize from 'react-native-normalize';

const Card = ({img, channel, imgChannel, title}) => {
  return (
    <View style={styles.container}>
      <View>
         <Image
         style={styles.img}
          source={{uri:img}}
          />
       </View>
       <View style={styles.infContainer}>
          <Avatar.Image style={{marginHorizontal:"2%"}} size={50} source={{uri:imgChannel}}/>
           <View style={styles.channelInfContainer}>
             <Text style={styles.title}>{title}</Text>
             <Text style={styles.channel}>{channel}</Text>
           </View>
       </View>
     </View>
  )
}
const styles = StyleSheet.create({
  container:{
   flex:1,
   flexDirection:'column',
   backgroundColor:'white',
   marginBottom:'2%'
  },
  img:{
    width:"100%",
    height:normalize(130),
  },
  infContainer:{
    flexDirection:'row',
    margin:"1%"
  },
  channelInfContainer:{
    flexDirection:'column'
  },
  title:{
    fontWeight:'bold',
    fontSize:normalize(18)
  },
  channel:{
    fontSize:normalize(17),
    color:'grey'
  }

})

export default Card
