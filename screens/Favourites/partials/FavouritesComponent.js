import React from 'react'
import styles from '../styles/index'
import { View, Text, FlatList,TouchableOpacity } from 'react-native'
import Card from '../../../components/Card'
import { userImg } from '../../../constImages/index'

const Favourites = ({data, handleNavigate}) => {

  return <FlatList
          data={data}
          keyExtractor={item => item.videoId}
          renderItem={({item})=>{
            return <TouchableOpacity onPress={()=>handleNavigate(item.videoId,item.title,item.channel,item.img)}>
                      <Card
                       img={item.img}
                       channel={item.channel}
                       imgChannel={userImg}
                       title={item.title}
                      />
                   </TouchableOpacity>
          }}
         />
}

export default Favourites
