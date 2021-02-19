import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput,Button, ActivityIndicator } from 'react-native-paper';
import styles from '../styles/index'

const Register = ({ errBool,isLoading,error,email,password,name,username,handleChange,handleSubmit,navigation }) => {
  return (
    <View style={styles.container}>

        <View style={styles.inputsContainer}>
        <Image
        style={styles.img}
         source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjfRBWCUdzk9QrujOqhd1a38NdFxmVvMcmeA&usqp=CAU"}}
        />
          <Text style={styles.text2}>Sign up</Text>
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
          <TextInput
          autoCapitalize='none'
          value={username}
          onChangeText={handleChange('username')}
          placeholder="username"
          style={styles.input} />
          <TextInput
          autoCapitalize='none'
          value={name}
          onChangeText={handleChange('name')}
          placeholder="name"
          style={styles.input} />
            {isLoading && <ActivityIndicator color={"#bf3636"} style={styles.loader} />}
            {errBool  && <Text style={styles.error}>{error}</Text>}
          <Button onPress={handleSubmit} mode="contained" style={styles.button}><Text style={styles.text}>Submit</Text></Button>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")} ><Text style={styles.redirect}>Have an account? sign in here!</Text></TouchableOpacity>
    </View>
  )
}

export default Register
