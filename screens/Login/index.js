import React, { useState } from 'react'
import useInputs from '../../hooks/useInputs'
import Login from './partials/LoginComponent'
import API from '../../api/usersApi.js'
import { useDispatch } from "react-redux";
import setUser from '../../redux/action-creators/user'

const LoginScreen = ({navigation}) => {
const [{username,password},handleChange] = useInputs()
const [error, setError] = useState("")
const [errBool, setErrBool] = useState(false)
const [isLoading, setIsLoading] = useState(false)
const dispatch = useDispatch();

const handleSubmit = async () => {
  setIsLoading(true)
  try{
if(!username.length || !password.length ) throw new SyntaxError("please, fill out all inputs")

  const response = await API.post("/auth",{user:username,password}).then(res=> res.data)

  setIsLoading(false)
  dispatch(setUser(response.data))
  navigation.navigate("Home")
  }catch(e){
    console.log("ex",e.message)
    setIsLoading(false)
    setErrBool(true)
    if(e instanceof SyntaxError){
      setError(e.message)
   }else if(e.message.indexOf("404") != -1) {
     setError("username not found")
   }else if(e.message.indexOf("401") != -1){
     setError("invalid password")
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
