import React, { useState } from 'react'
import useInputs from '../../hooks/useInputs'
import Register from './partials/RegisterComponent'
import API from '../../api/usersApi.js'

const RegisterScreen = ({navigation}) => {
const [{ email, password, name, username}, handleChange] = useInputs()
const [error, setError] = useState("")
const [errBool, setErrBool] = useState(false)
const [isLoading, setIsLoading] = useState(false)

const handleSubmit =async () => {
setIsLoading(true)
try{
if(!email.length || !password.length || !name.length || !username.length) throw new SyntaxError("please, fill out all inputs") //me aseguro de que todos los inputs sean llenados

  const response = await API.post("/user",{
     user: username,
     password,
     name,
     email
   }).then(res=>res.data)
   if(response.error) throw new Error(JSON.stringify(response)) // me aseguro de que si hay un error salte a la excepción
   setIsLoading(false)
   navigation.navigate("Login")
}catch(e){
  setIsLoading(false)
  setErrBool(true)
  if(e instanceof SyntaxError){  //setea el error de los inputs vacios
    setError(e.message)
  }else{
    setError("ups, something went wrong") //excepción general
  }
  setTimeout(()=>{
    setError("")
    setErrBool(false)
  },4000)

}


}
    return <Register error={error} navigation={navigation} errBool={errBool} isLoading={isLoading} username={username} email={email} password={password} handleChange={handleChange} handleSubmit={handleSubmit} />
}


export default RegisterScreen
