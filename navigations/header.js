import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import { Appbar, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import useInputs from '../hooks/useInputs'
import { useSelector, useDispatch } from 'react-redux'
import { setPressed } from '../redux/action-creators/search'
import SearchBar from '../components/searchBar'

const Header = ({ scene, previous, navigation }) => {
    const [{search}, handleChange] = useInputs()
    const dispatch = useDispatch()
    const isInSearchScreen = useSelector((state)=> state.searchReducer.pressed)
    const setSearch = handleChange('search')

    const { options } = scene.descriptor;
    const title =
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name;

    return(
        <Appbar.Header style={{backgroundColor: 'white'}}>
        {previous ? (
          <Appbar.BackAction
            onPress={()=>{
              dispatch(setPressed(false))
              navigation.pop()
            }}
          />
        ) :
        (
            <Appbar.Content
             title={<MaterialCommunityIcons color="red" name="youtube" size={40} />}
            />

        )}

        {isInSearchScreen?
         <SearchBar search={search} setSearch={setSearch}/>
        :
        <View style={{justifyContent:'space-around',flexDirection:'row',alignSelf:'center',width:'25%'}}>
         <TouchableOpacity onPress={()=>{
           navigation.push("Search")
           dispatch(setPressed(true))
         }}>
           <Ionicons name="ios-search" size={30} color="black" />
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

})

export default Header
