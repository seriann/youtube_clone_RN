import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/index'
import { TextInput,Button, ActivityIndicator } from 'react-native-paper';

const Login = ({ errBool,isLoading,error,username, password,handleChange,handleSubmit,navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.inputsContainer}>
        <Image
        style={styles.img}
         source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjfRBWCUdzk9QrujOqhd1a38NdFxmVvMcmeA&usqp=CAU"}}
        />
          <Text style={styles.text2}>Sign in</Text>
          <TextInput
          autoCapitalize='none'
          value={username}
          onChangeText={handleChange('username')}
          placeholder="username"
          style={styles.input} />
          <TextInput
          onChangeText={handleChange('password')}
          value={password}
          secureTextEntry={true}
          placeholder="password"
          style={styles.input} />
          {isLoading && <ActivityIndicator color={"#bf3636"} style={styles.loader} />}
          {errBool  && <Text style={styles.error}>{error}</Text>}
          <Button onPress={handleSubmit} mode="contained" style={styles.button}><Text style={styles.text}>Submit</Text></Button>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Register")} ><Text style={styles.redirect}>don't have an account? </Text></TouchableOpacity>
      </View>
  )
}

export default Login
