import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text> Login </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default Login