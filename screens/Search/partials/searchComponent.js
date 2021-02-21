import React from 'react'
import styles from '../styles/index'
import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import Card from './searchCard'

const Search = ({data, isLoading}) => {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
    {isLoading && <ActivityIndicator style={{marginTop:'5%'}} color={"#bf3636"}/>}
      <FlatList
       data={data}
       keyExtractor={item => item.id.videoId}
       renderItem={({item}) =>{
        return <TouchableOpacity>
           <Card
           img={item.snippet.thumbnails.medium.url}
           channel={item.snippet.channelTitle}
           title={item.snippet.title}
           />
         </TouchableOpacity>
       }}
      />
    </View>
  )
}
export default Search
