import React from 'react'
import Search from './partials/searchComponent.js'
import { useSelector } from 'react-redux'

const SearchScreen = () => {
const isLoading = useSelector((state)=> state.searchReducer.isLoading)
const data = useSelector((state)=> state.searchReducer.search)


  return <Search isLoading={isLoading} data={data}/>
}

export default SearchScreen
