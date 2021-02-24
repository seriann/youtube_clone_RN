import React,{useState} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Favourites from '../screens/Favourites/index'
import Main from '../screens/Main/index'
import {StyleSheet} from 'react-native'
import {useTheme} from 'react-native-paper'

const Tab = createMaterialBottomTabNavigator();

const BottomNav = ({navigation}) => {
  const theme = useTheme()
  const { index, routes } = navigation.dangerouslyGetState();
  const [bool, setBool] = useState(true)
  const currentRoute = routes[index].state ? routes[index].state.index : 0

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      inactiveColor={theme.dark?styles.grey.color:'black'}
      activeColor={theme.dark?styles.inDarkActive.color:'red'}
      barStyle={{
        backgroundColor:theme.colors.bottomTabColor,
        borderTopColor:theme.colors.lineBottomColor,
        borderTopWidth:0.5
      }}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Entypo name="home" style={theme.dark?(currentRoute == 0? styles.inDarkActive: styles.grey):currentRoute == 0? styles.red : styles.grey} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favs"

        component={Favourites}
        options={{
          tabBarLabel: "Favs",
          tabBarIcon: () =>(
          <Fontisto name="favorite" style={theme.dark?(currentRoute == 1? styles.inDarkActive: styles.grey):currentRoute == 1? styles.red : styles.grey} size={24}  />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  red:{
    color:'red'
  },
  grey:{
    color:'#bab7b6'
  },
  inDarkActive:{
    color:'#f7f7f7'
  },
})

export default BottomNav
