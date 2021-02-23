import { StyleSheet,Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
import normalize from 'react-native-normalize';

export default StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    padding:'2%'
  },
  infContainer:{
    flexDirection:'column',
    padding:'2%'
  },
  img:{
    width:'30%',
    height:normalize(80),
  },
  title:{
    width: width * .6,
    fontWeight:'bold'
  },
  channel:{
    color:'grey'
  }
})
