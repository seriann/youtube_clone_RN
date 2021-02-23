import React from 'react'
import { View, Text, Dimensions,Slider, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native'
import styles from '../styles/index'
import { WebView } from 'react-native-webview'
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import RVFlatList from './RVFlatList'
import { errImg } from '../../../constImages'

const img = "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"


const Player = ({title,channel,videoUrl,relatedVideos,handleNavigate}) => {

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <WebView
          source={{uri:videoUrl}}
        />
      </View>
      <ScrollView style={styles.content}>
         <Text
          numberOfLines={2}
         style={styles.title}
         >{title}</Text>
           <View style={styles.favContainer}>
           <Text style={styles.favTxt}>add to favourites?</Text>
             <View style={styles.likeContainer}>
                <TouchableOpacity>
               <AntDesign name="like1" color={"grey"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
               <AntDesign name="dislike1" color={"grey"} size={30} />
                </TouchableOpacity>
              </View>
           </View>
          <View style={styles.channel}>
            <Avatar.Image style={{marginHorizontal:"2%"}} size={40} source={{uri:img}}/>
            <Text style={styles.txt}>{channel}</Text>
          </View>
          <RVFlatList data={relatedVideos} handleNavigate={handleNavigate}/>
      </ScrollView>
    </View>
  )
}

export default Player
