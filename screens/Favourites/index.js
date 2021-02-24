import React from 'react'
import Favourite from './partials/FavouritesComponent'
import { useDispatch, useSelector } from 'react-redux'

const FavouritesScreen = ({ navigation }) => {
const dispatch = useDispatch()
const favourites = useSelector((state)=> state.favouriteReducer.favourites)

const handleNavigate = (videoId,title,channel,image) => {
  navigation.navigate('player',{
                                videoId,
                                title,
                                channel,
                                image,
                                liked:true
                              })
}

  return <Favourite data={favourites} handleNavigate={handleNavigate}/>
}

export default FavouritesScreen
