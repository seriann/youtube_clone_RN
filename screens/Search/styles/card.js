import { StyleSheet, Dimensions } from 'react-native'
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    padding:"3%",
    backgroundColor:'white'
  },
  img:{
    width:"50%",
    height:normalize(100)
  },
  infContainer:{
    flexDirection:'column',
    padding:"2%"
  },
  title:{
    fontWeight:'bold',
    fontSize:normalize(18),
    width:Dimensions.get('screen').width - normalize(200)
  },
  channel:{
    fontSize:normalize(17),
    color:'grey'
  }
})
