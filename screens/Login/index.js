import React, { useState } from 'react'
import useInputs from '../../hooks/useInputs'
import Login from './partials/LoginComponent'
import API from '../../api/usersApi.js'
import { useDispatch } from "react-redux";
import { setUser } from '../../redux/action-creators/user'

const LoginScreen = ({navigation}) => {
const [{username,password},handleChange] = useInputs()
const [error, setError] = useState("")
const [errBool, setErrBool] = useState(false)
const [isLoading, setIsLoading] = useState(false)
const dispatch = useDispatch();

const handleSubmit = async () => {
  setIsLoading(true)
  try{
if(!username.length || !password.length ) throw new SyntaxError("please, fill out all inputs") //me aseguro de que todos los inputs sean llenados

  const response = await API.post("/auth",{user:username,password}).then(res=> res.data.data.user)

  setIsLoading(false)
  dispatch(setUser(response))
  navigation.navigate("Home")
  }catch(e){
    console.log("ex",e.message)
    setIsLoading(false)
    setErrBool(true)
    if(e instanceof SyntaxError){ //setea el error de los inputs vacios
      setError(e.message)
   }else if(e.message.indexOf("404") != -1) { //busco si en el mensaje de error esta el err status 404(not found)
     setError("username not found")           //que indica que no se encontro un usuario con ese nombre
   }else if(e.message.indexOf("401") != -1){ //busco si en el mensaje de error esta el err status 401(unauthorized)
     setError("invalid password")            //que indica que la contraseña es incorrecta
   }
   else{
     setError("ups, something went wrong") //excepción general
   }
   setTimeout(()=>{
     setError("")
     setErrBool(false)
   },4000)
 }
}
    return <Login errBool={errBool} error={error} isLoading={isLoading} navigation={navigation} username={username} password={password} handleChange={handleChange} handleSubmit={handleSubmit}/>
}



export default LoginScreen
