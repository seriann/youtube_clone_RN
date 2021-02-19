import React, { useState } from 'react'
import useInputs from '../../hooks/useInputs'
import Login from './partials/LoginComponent'
import API from '../../api/usersApi.js'

const LoginScreen = ({navigation}) => {
const [{username,password},handleChange] = useInputs()
const [error, setError] = useState("")
const [errBool, setErrBool] = useState(false)
const [isLoading, setIsLoading] = useState(false)

const handleSubmit = async () => {
  try{
if(!username.length || !password.length ) throw new SyntaxError("please, fill out all inputs")

  const response = await API.post("/auth",{user:username,password}).then(res=> res.data)
  console.log("res",response);
  if(response.error) throw new RangeError(JSON.stringify(response))
  setIsLoading(false)
  navigation.navigate("Home")
  }catch(e){
    console.log("ex",JSON.stringify(e))
    setIsLoading(false)
    setErrBool(true)
    if(e instanceof SyntaxError){
      setError(e.message)
   }else if(e instanceof RangeError){
     setError(e.message)
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
