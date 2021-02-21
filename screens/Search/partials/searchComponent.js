import React from 'react'
import styles from '../styles/index'
import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import Card from './searchCard'

const Search = ({dummyData}) => {
  return (
    <View>
      <FlatList
       data={dummyData}
       keyExtractor={item => item.id}
       renderItem={({item}) =>{
        return <TouchableOpacity>
           <Card
           img={item.img}
           channel={item.channel}
           title={item.title}
           />
         </TouchableOpacity>
       }}
      />
    </View>
  )
}
export default Search
