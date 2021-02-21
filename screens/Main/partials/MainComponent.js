import React from 'react'
import styles from '../styles/index'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Card from '../../../components/Card'

const Main = ({data}) => {
const img = "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"
   return (
    <View styles={styles.container}>
      <FlatList
       data={data}
       keyExtractor={item => item.id.videoId}
       renderItem={({item}) =>{
        return  <TouchableOpacity>
           <Card
           img={item.snippet.thumbnails.high.url}
           channel={item.snippet.channelTitle}
           imgChannel={img}
           title={item.snippet.title}
           />
         </TouchableOpacity>
       }}
      />
    </View>
  )
}

export default Main
