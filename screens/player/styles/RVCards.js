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
    width:'35%',
    height:normalize(80),
  },
  channel:{
    color:'grey'
  }
})
