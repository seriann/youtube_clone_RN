//import 'react-native-gesture-handler';
import React,{ useEffect } from 'react';
import { NavigationContainer,
         DefaultTheme as NavigationDefaultTheme,
         DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider,
         DarkTheme as PaperDarkTheme,
         DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import DrawerContent from './navigations/drawer'
import Login from './screens/Login/index'
import Register from './screens/Register'
import FeedStack from './navigations/feedStack'
import { useSelector } from "react-redux";

console.disableYellowBox = true;

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: { ...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors,
  headerColor:'white',
  iconColor:'black',
  bottomTabColor:'white',
  lineBottomColor:'#c4c4c4',
  background: 'white'
  }
};

const CombinedDarkTheme= {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
 colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors,
 headerColor:'#363636',
 iconColor:'white',
 bottomTabColor:'#171717',
 lineBottomColor:'#171717',
 background: 'black'
 },
}

const Drawer = createDrawerNavigator();



export default function App() {
const darkMode = useSelector((state)=> state.darkModeReducer.dark)

  return (
    <PaperProvider theme={darkMode? CombinedDarkTheme: CombinedDefaultTheme}>
       <NavigationContainer theme={darkMode? CombinedDarkTheme: CombinedDefaultTheme}>
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
             <Drawer.Screen name='Login' component={Login}/>
             <Drawer.Screen name='Register' component={Register}/>
             <Drawer.Screen name='Home' component={FeedStack}/>
          </Drawer.Navigator>
       </NavigationContainer>
    </PaperProvider>
  );
}
