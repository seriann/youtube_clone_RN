import React from 'react'
import Search from './partials/searchComponent.js'

const SearchScreen = () => {
  const img = "https://images.unsplash.com/photo-1581140578202-1f9992256f9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  const imgChannel = "https://png.pngtree.com/png-vector/20191009/ourmid/pngtree-user-icon-png-image_1796659.jpg"

  const dummyData = [{
    id:"1",img:img,channel:"ian",title:"React Native youtube clonASDasdasdSdashduiIUASDHHHHHHHhaushiiduahsudhuiahsuadhsuasdSDdasdasdasdasdasdasdasasasd"}
  ,{id:"2",img:img,channel:"ian",title:"React Native youtube SEARCH"},
   {id:"3",img:img,channel:"ian",title:"React Native youtube clon"}]

  return <Search dummyData={dummyData}/>
}

export default SearchScreen
