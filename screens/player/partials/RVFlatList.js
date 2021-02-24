import React from 'react'
import {FlatList, TouchableOpacity} from 'react-native'
import RelatedVideosCard from './RelatedVideosCard'

const RVFlatList = ({data,handleNavigate}) => {
  return <FlatList
          data={data}
          keyExtractor={item=> item.id.videoId}
          renderItem={({item})=>{

            return <TouchableOpacity onPress={()=>{
              if(!item.snippet) return;
              handleNavigate(item.id.videoId,item.snippet.title,item.snippet.channelTitle,item.snippet.thumbnails.high.url)
            }}>
                     <RelatedVideosCard
                     img={item.snippet != undefined?item.snippet.thumbnails.high.url: ""}
                     channel={item.snippet != undefined? item.snippet.channelTitle: ""}
                     title={item.snippet?item.snippet.title: ""}
                     />
                   </TouchableOpacity>
          }}
         />
}
export default RVFlatList
