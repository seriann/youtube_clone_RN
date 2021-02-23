import React,{ useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../screens/Main/index'
import Player from '../screens/player/index'
import Header from './header'
import BottomNavigator from './bottomNavigator'
import Search from '../screens/Search/index'
import { setPressed } from '../redux/action-creators/search'
import { fetchMainVideos } from '../redux/action-creators/main'
import { useDispatch } from 'react-redux'

const Stack = createStackNavigator()

const FeedStack = () => {

  const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(setPressed(false))
      dispatch(fetchMainVideos())
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
