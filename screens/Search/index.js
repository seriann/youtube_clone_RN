import React from 'react'
import Search from './partials/searchComponent.js'
import { useSelector, useDispatch } from 'react-redux'
import { setPressed, setInVideo } from '../../redux/action-creators/search'

const SearchScreen = ({navigation}) => {
const dispatch = useDispatch()
const isLoading = useSelector((state)=> state.searchReducer.isLoading)
const data = useSelector((state)=> state.searchReducer.search)

const changeHeader = () => { //ayuda a ocultar la searchbar cuando entras a un video
  dispatch(setInVideo(true))
  dispatch(setPressed(false))
}

  return <Search changeHeader={changeHeader} navigation={navigation} isLoading={isLoading} data={data}/>
}

export default SearchScreen
