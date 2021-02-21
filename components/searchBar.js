import React, { useEffect } from 'react'
import { View, TextInput, StyleSheet} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import normalize from 'react-native-normalize';
import { setData, setLoading } from '../redux/action-creators/search'
import { Youtube } from '../api/youtubeApi'

const SearchBar = ({search, setSearch}) => {
const dispatch = useDispatch()
const searchData = useSelector((state)=> state.searchReducer.search)

const handleSubmit = async() => {
  dispatch(setLoading(true))
  const y = new Youtube(search)
  try{
    const res = await y.getVideos()
    dispatch(setData(res.items))
    dispatch(setLoading(false))
  }catch(e){
    dispatch(setLoading(false))
    console.log(e)
  }
}


  return(
    <View style={styles.container}>
      <TextInput
       autoFocus={true}
       style={styles.input}
       autoCapitalize='none'
       autoCorrect={false}
       value={search}
       onChangeText={setSearch}
       onSubmitEditing={handleSubmit}
       placeholder='Search'
      />
      <Ionicons
       style={styles.deleteIcon}
       name='ios-close'
       onPress={()=> setSearch("")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:'70%',
    width:'80%',
    backgroundColor:'#d6d6d6',
    marginRight:"20%",
    flexDirection:'row',
  },
  input:{
   flex:9.5,
   marginLeft:'3%'
 },
 deleteIcon:{
   flex:0.5,
   fontSize: normalize(30),
   alignSelf:'center',
   marginHorizontal:'3%'
 }
})

export default SearchBar
