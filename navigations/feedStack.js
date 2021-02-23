import React,{ useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../screens/Main/index'
import Player from '../screens/player/index'
import Header from './header'
import BottomNavigator from './bottomNavigator'
import Search from '../screens/Search/index'
import { setPressed } from '../redux/action-creators/search'
import { fetchMainVideos } from '../redux/action-creators/main'
import { fetchFavourites } from '../redux/action-creators/favourites'
import { useDispatch, useSelector } from 'react-redux'

const Stack = createStackNavigator()

const FeedStack = () => {

  const userId = useSelector((state)=> state.userReducer.user._id)
  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(setPressed(false))
      dispatch(fetchMainVideos())
      dispatch(fetchFavourites(userId))
    },[])

    return(
        <Stack.Navigator
         initialRouteName="FeedList"
         headerMode="screen"
         screenOptions={{
             header: ({scene, previous, navigation}) => (
                 <Header scene={scene} previous={previous} navigation={navigation} />
             )
         }}
        >
            <Stack.Screen name="Bottom" component={BottomNavigator}/>
            <Stack.Screen name="player" component={Player}/>
            <Stack.Screen name="Search" component={Search}/>
        </Stack.Navigator>
    )
}
export default FeedStack
