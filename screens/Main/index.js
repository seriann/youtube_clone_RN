import React from 'react'
import Main from './partials/MainComponent';
import { useSelector } from "react-redux";

const MainScreen = () => {
const data = useSelector((state)=> state.mainReducer.data)

    return <Main data={data} />
}

export default MainScreen
