import React from 'react'
import styles from '../styles/index'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import Card from '../../../components/Card'

const Main = ({dummyData}) => {

   return (
    <View styles={styles.container}>
      <FlatList
       data={dummyData}
       keyExtractor={item => item.id}
       renderItem={({item}) =>{
        return  <TouchableOpacity>
           <Card
           img={item.img}
           channel={item.channel}
           imgChannel={item.imgChannel}
           title={item.title}
           />
         </TouchableOpacity>
       }}
      />
    </View>
  )
}

export default Main
