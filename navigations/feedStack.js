import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Main from '../screens/Main/index'
import Player from '../screens/player/index'
import Header from './header'

const Stack = createStackNavigator()

const FeedStack = () => {
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
            <Stack.Screen name="main" component={Main}/>
            <Stack.Screen name="player" component={Player}/>
        </Stack.Navigator>
    )
}
export default FeedStack
