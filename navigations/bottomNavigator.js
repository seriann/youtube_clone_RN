import React,{useState} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Favourites from '../screens/Favourites/index'
import Main from '../screens/Main/index'
import {StyleSheet} from 'react-native'

const Tab = createMaterialBottomTabNavigator();

const BottomNav = ({navigation}) => {
  const { index, routes } = navigation.dangerouslyGetState();
  const [bool, setBool] = useState(true)
  const currentRoute = routes[index].state ? routes[index].state.index : 0


  return (
    <Tab.Navigator
      initialRouteName="Feed"
      inactiveColor="black"
      activeColor="red"
      barStyle={styles.container}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Entypo name="home" style={currentRoute == 0? styles.red: styles.black} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Favs"

        component={Favourites}
        options={{
          tabBarLabel: "Favs",
          tabBarIcon: () =>(
          <Fontisto name="favorite" style={currentRoute == 1? styles.red: styles.black} size={24}  />
          ),
        }}
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    borderTopColor:"#c4c4c4",
    borderTopWidth:0.5
  },
  red:{
    color:'red'
  },
  black:{
    color:'black'
  }
})

export default BottomNav
