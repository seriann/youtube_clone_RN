import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet, Text } from 'react-native'
import { Appbar, Avatar, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import useInputs from '../hooks/useInputs'
import { useSelector, useDispatch } from 'react-redux'
import { setPressed, setInVideo } from '../redux/action-creators/search'
import SearchBar from '../components/searchBar'
import normalize from 'react-native-normalize';

const Header = ({ scene, previous, navigation }) => {
    const theme = useTheme()
    const [{search}, handleChange] = useInputs()
    const dispatch = useDispatch()
    const isInSearchScreen = useSelector((state)=> state.searchReducer.pressed)
    const setSearch = handleChange('search')
    const inVideo = useSelector((state)=> state.searchReducer.inVideo)

    const { options } = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;

    return(
        <Appbar.Header style={{backgroundColor:theme.colors.headerColor}}>
        {previous ? (
          <Appbar.BackAction
            onPress={()=>{
              if(isInSearchScreen && !inVideo){
                dispatch(setPressed(false))
              }
               else if(inVideo){
                dispatch(setInVideo(false))
                dispatch(setPressed(true))
              }
              navigation.pop()
            }}
          />
        ) :
        (
            <Appbar.Content
             title={<MaterialCommunityIcons color="red" name="youtube" size={normalize(39)} />}
            />
        )}

        <Appbar.Content/>

        {isInSearchScreen?
         <SearchBar search={search} setSearch={setSearch}/>
        :
        <View style={styles.iconContainer}>
         <TouchableOpacity onPress={()=>{
           navigation.push("Search")
           dispatch(setPressed(true))
         }}>
           <Ionicons name="ios-search" size={normalize(30)} color={theme.colors.iconColor} />
         </TouchableOpacity>
         <TouchableOpacity
           onPress={() => {
             navigation.openDrawer();
           }}
         >
           <Avatar.Image
             size={35}
             source={{
               uri:
                 'https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg',
             }}
           />
         </TouchableOpacity>
         </View>
        }

      </Appbar.Header>
    )
}

const styles = StyleSheet.create({
iconContainer:{
  justifyContent:'space-around',flexDirection:'row',alignSelf:'center',width:'25%'
}
})

export default Header
