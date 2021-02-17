//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerContent from './navigations/drawer'
import Login from './screens/Login'
import Register from './screens/Register'
import FeedStack from './navigations/feedStack'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider> 
     <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name='Register' component={Register}/>
           <Drawer.Screen name='Login' component={Login}/>
           <Drawer.Screen name='Home' component={FeedStack}/>
           
        </Drawer.Navigator>
     </NavigationContainer>
    </PaperProvider> 
  );
}
