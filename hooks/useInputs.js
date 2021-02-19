import { useState, useEffect } from "react";


const useInputs = () => {
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        name:"",
        username:"",
    })
  const changeInput = (key,value) =>setInputs({...inputs,[key]: value})
  const handleChange = (type) => (text) => changeInput(type,text)

return [inputs, handleChange]
}
export default useInputs
