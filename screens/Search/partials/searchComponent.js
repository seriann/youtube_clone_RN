import React from 'react'
import styles from '../styles/index'
import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-paper';
import Card from './searchCard'

const Search = ({data, isLoading, navigation, changeHeader}) => {
  return (
    <View style={styles.container}>
    {isLoading && <ActivityIndicator style={styles.activityIndicator} color={"#bf3636"}/>}
      <FlatList
       data={data}
       keyExtractor={item => item.id.videoId}
       renderItem={({item}) =>{
        return <TouchableOpacity onPress={()=>{
          navigation.navigate('player',{
                                        videoId:item.id.videoId,
                                        title:item.snippet.title,
                                        channel:item.snippet.channelTitle,
                                        image:item.snippet.thumbnails.high.url
                                      })
          changeHeader()
        }}>
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
