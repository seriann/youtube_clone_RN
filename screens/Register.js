import React from 'react'
import { StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native';
import firebase from '../database/firebase'
import Input from '../components/inputData'
import useInputs from '../hooks/useInputs'
import { TextInput } from 'react-native-paper';

const Register = () => {
const [{ email, password}, handleChange] = useInputs()

const onSubmit = async (txt) => {

    return console.log({
        email:email,
        password:password
    })
}
    return (
        <View style={StyleSheet.container}>
            <View style={styles.inputsContainer}>
              <TextInput 
              autoCapitalize='none'
              value={email}
              onChangeText={handleChange('email')}
              placeholder="email" 
              style={styles.input} />
              <TextInput 
              onChangeText={handleChange('password')}
              value={password}
              secureTextEntry={true}
              placeholder="password" 
              style={styles.input} />
            </View>
            <Button
            onPress={()=> onSubmit()}
              title="submit"
              />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    input:{
        alignSelf:'center',
        marginTop:"2%",
        fontSize:20,
        width:"85%",
     },
     inputsContainer:{
         
     }
})

export default Register