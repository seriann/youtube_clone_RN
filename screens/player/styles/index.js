import { StyleSheet,Dimensions } from 'react-native'
const { width } = Dimensions.get('window')
import normalize from 'react-native-normalize';

export default StyleSheet.create({
 container:{
     flex:1
   },
   videoContainer:{
     width:width,
     height:width * .6,
     backgroundColor:'black'
 },
 content:{
   flexDirection:'column'
 },
 title:{
   fontWeight:'bold',
   fontSize:normalize(25),
   width,
   paddingHorizontal:'3%'
 },
 favContainer:{
   width:'30%',
   flexDirection:'row',
   marginVertical:'3%',
   justifyContent:'space-around'
 },
 channel:{
   flexDirection:'row',
   alignItems:'center',
   borderColor:'#d9d9d9',
   borderTopWidth:0.9,
   borderBottomWidth:0.9,
 },
 txt:{
  fontWeight:'bold'
 }
})
