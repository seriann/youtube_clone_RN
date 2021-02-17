import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default ({handleChange, title, text, secureTextEntry,placeholderColor}) => {
    return(
        <View style={styles.container}>
            <TextInput
             autoCorrect={false}
             autoCompleteType="username"
             style={styles.input}
             onChangeText={handleChange}
             value={text}
             placeholder={title}
             placeholderTextColor={placeholderColor}
             secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:"100%",
    alignItems:'center'
  },
  input:{
     fontSize:20,
     borderBottomColor:'red',
     borderBottomWidth:1,
     marginTop:"10%",
     height:"85%",
     width:"85%",
  }
})