import React from 'react'
import Main from './partials/MainComponent';
import { useSelector } from "react-redux";

const MainScreen = () => {
const user = useSelector((state)=> state.userReducer.user.user)

    return <Main user={user}/>
}

export default MainScreen
