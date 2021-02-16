import React from 'react'
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import { Appbar, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = ({ scene, previous, navigation }) => {

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
            onPress={navigation.pop}
          />
        ) : (
            <Appbar.Content
             title={<MaterialCommunityIcons color="red" name="youtube" size={40} />}
            />
          
        )}
        <Appbar.Content/>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Avatar.Image
            size={40}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
          />
        </TouchableOpacity>
      </Appbar.Header>
    )
}

const styles = StyleSheet.create({

})

export default Header