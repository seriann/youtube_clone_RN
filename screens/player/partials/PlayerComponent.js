import React from 'react'
import { View, Text, Dimensions,Slider, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native'
import styles from '../styles/index'
import { WebView } from 'react-native-webview'
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import RVFlatList from './RVFlatList'
import { errImg, userImg } from '../../../constImages'
import normalize from 'react-native-normalize';
import { useTheme } from 'react-native-paper'

const { width } = Dimensions.get('window')

const Player = ({handleDislike,dislike,isLiked,image,videoId,title,channel,videoUrl,relatedVideos,handleNavigate,userId,handleFav}) => {
 const theme = useTheme()
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
         style={{
           fontWeight:'bold',
           fontSize:normalize(25),
           width,
           paddingHorizontal:'3%',
           marginBottom:'2%',
           color:theme.colors.text
         }}
         >{title}</Text>
           <View style={styles.favContainer}>
           <Text style={styles.favTxt}>add to favourites?</Text>
             <View style={styles.likeContainer}>
                <TouchableOpacity onPress={()=>handleFav(userId,videoId,image,title,channel)}>
                  <AntDesign name="like1" color={isLiked?'#2ea6f0' :'grey'} size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleDislike(userId,videoId,image,title,channel)}>
                  <AntDesign name="dislike1" color={dislike?'#2ea6f0':'grey'} size={30} />
                </TouchableOpacity>
              </View>
           </View>
          <View style={styles.channel}>
            <Avatar.Image style={{marginHorizontal:"2%"}} size={40} source={{uri:userImg}}/>
            <Text style={{
             fontWeight:'bold',
             color:theme.colors.text
           }}>{channel}</Text>
          </View>
          <RVFlatList data={relatedVideos} handleNavigate={handleNavigate}/>
      </ScrollView>
    </View>
  )
}

export default Player
