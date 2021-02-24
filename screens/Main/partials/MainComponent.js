import React from 'react'
import styles from '../styles/index'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Card from '../../../components/Card'
import { userImg } from '../../../constImages/index'

const Main = ({data, handleNavigate}) => {

   return (
    <View styles={styles.container}>
      <FlatList
       data={data}
       keyExtractor={item => item.id.videoId}
       renderItem={({item}) =>{
        return  <TouchableOpacity
                onPress={()=>handleNavigate(item.id.videoId,item.snippet.title,item.snippet.channelTitle,item.snippet.thumbnails.high.url)}
                >
           <Card
           img={item.snippet.thumbnails.high.url}
           channel={item.snippet.channelTitle}
           imgChannel={userImg}
           title={item.snippet.title}
           />
         </TouchableOpacity>
       }}
      />
    </View>
  )
}

export default Main
