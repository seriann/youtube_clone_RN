//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerContent from './navigations/drawer'
import Login from './screens/Login/index'
import Register from './screens/Register'
import FeedStack from './navigations/feedStack'
import { Provider } from "react-redux";
import store from './redux/index'

//const API_KEY= "AIzaSyDcC_2lHAxWdJ6LLjO_fKvHAi1nopVhsgI"

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
     <Provider store={store}>
       <NavigationContainer>
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name='Register' component={Register}/>
             <Drawer.Screen name='Login' component={Login}/>
             <Drawer.Screen name='Home' component={FeedStack}/>
          </Drawer.Navigator>
       </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}
