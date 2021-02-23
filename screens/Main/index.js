import React from 'react'
import Main from './partials/MainComponent';
import { useSelector } from "react-redux";

const MainScreen = ({navigation}) => {
const data = useSelector((state)=> state.mainReducer.data)

    return <Main navigation={navigation} data={data} />
}

export default MainScreen
