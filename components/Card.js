import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'

const Card = () => {
  return (
    <View>
       <Image
       style={styles.img}
        source={{uri:"https://images.unsplash.com/photo-1581140578202-1f9992256f9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  img:{
    width:"50%"
  }
})

export default Card
