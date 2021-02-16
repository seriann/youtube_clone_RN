import React from 'react'
import { StyleSheet ,View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {useTheme,Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';

const DrawerContent = (props) => {
    return(
           <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                <Avatar.Image
                 source={{
                   uri:'https://www.google.com/search?q=akita+inu+meme+gordo&sxsrf=ALeKk01UKO0c-uag8FCd7bXAkfhet-2LJg:1613511854798&tbm=isch&source=iu&ictx=1&fir=dnAQ_HA4wzHUhM%252CDwGU3jHTHGW3aM%252C_&vet=1&usg=AI4_-kQ2Z-hlAVN6RYmZbZAMw3auErQTXQ&sa=X&ved=2ahUKEwjzosiHsO_uAhXfH7kGHVyBAygQ9QF6BAgOEAE#imgrc=dnAQ_HA4wzHUhM',
                 }}
                 size={50}
                />
                <Title style={styles.title}>Ian</Title>
                <Caption style={styles.caption}>@Ian</Caption>
                <View style={styles.row}>             
                   </View>
                 </View>
              </View>
              <Drawer.Section style={styles.drawerSection}>
                  <DrawerItem
                    icon={({ color, size }) => (
                      <MaterialCommunityIcons
                        name="bookmark-outline"
                        color={color}
                        size={size}
                      />
                    )}
                    label="Videos favoritos"
                    onPress={() => {}}
                  />
               </Drawer.Section>
                    <Drawer.Section title="Preferences">
                      <TouchableRipple onPress={() => {}}>
                        <View style={styles.preference}>
                          <Text>Dark Theme</Text>
                          <View pointerEvents="none">
                            <Switch value={false} />
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
              onPress={()=>console.log("deslogueo")}
            />
          </Drawer.Section>
        </View>

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