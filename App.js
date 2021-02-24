import React from 'react'
import App from './AppWrapper'
import { Provider, useSelector } from "react-redux";
import store from './redux/index'

export default function AppWrapper() {
  return <Provider store={store}>
    <App/>
  </Provider>
}


//Este componente seria el verdadero Wrapper
//haciendo que el Componente App llamado "AppWrapper"
//pueda tener acceso al store nadamas cargar, y asi poder usar el Dark Mode
