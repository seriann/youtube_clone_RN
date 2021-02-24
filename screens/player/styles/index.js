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
   paddingHorizontal:'3%',
   marginBottom:'2%'
 },
 favContainer:{
   width:'80%',
   flexDirection:'row',
   marginVertical:'3%',
   justifyContent:'space-around',
   alignItems:'center',
 },
 channel:{
   flexDirection:'row',
   alignItems:'center',
   borderColor:'#c7c7c7',
   paddingTop:'1%',
   paddingBottom:'1%',
   borderTopWidth:0.9,
   borderBottomWidth:0.9,
 },
likeContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:'25%'
},
favTxt:{
  color:'#b51616',
  fontWeight:'bold',
  fontSize:normalize(20)
}
})
