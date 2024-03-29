import React from 'react'
import { StyleSheet ,View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {useTheme,Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { logoutUser } from '../redux/action-creators/user'
import { setDark } from '../redux/action-creators/darkMode'
import { setFavourites } from '../redux/action-creators/favourites'

const DrawerContent = (props) => {
  const dispatch = useDispatch()
  const theme= useTheme()
  const user = useSelector((state)=> state.userReducer.user)
  const handleLogout = () => {
    dispatch(logoutUser())
    props.navigation.navigate("Login")
  }

    return(
      <DrawerContentScrollView {...props}>
           {JSON.stringify(user) == "{}"?
           <Text style={{alignSelf:'center',color:'red'}}>please login first </Text>
           :
             <View>
              <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                <Avatar.Image
                 source={{
                   uri:'https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg',
                 }}
                 size={50}
                />
                <Title style={styles.title}>{user.name}</Title>
                <Caption style={styles.caption}>@{user.user}</Caption>
                <View style={styles.row}>
                   </View>
                 </View>
              </View>

                    <Drawer.Section title="Preferences">
                      <TouchableRipple onPress={()=> {
                        dispatch(setDark(!theme.dark))
                      }}>
                        <View style={styles.preference}>
                          <Text>Dark Theme</Text>
                          <View pointerEvents="none">
                            <Switch value={theme.dark} />
                          </View>
                        </View>
                      </TouchableRipple>
                    </Drawer.Section>

                    <View>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="exit-to-app"
                  color={color}
                  size={size}
                />
              )}
              label="Log Out"
              onPress={handleLogout}
            />
          </Drawer.Section>
        </View>
        </View>
           }
    </DrawerContentScrollView>
    )

}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      marginTop: 20,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

export default DrawerContent
