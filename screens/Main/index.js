import React from 'react'
import Main from './partials/MainComponent';
import { useSelector } from "react-redux";

const MainScreen = ({navigation}) => {
const data = useSelector((state)=> state.mainReducer.data)

const handleNavigate = (videoId,title,channel,image) => {
  navigation.navigate('player',{videoId,title,channel,image})
}

    return <Main handleNavigate={handleNavigate} data={data} />
}

export default MainScreen
