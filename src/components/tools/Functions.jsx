import React from 'react'

export default function Functions(event) {
  if(event.key == 'f'){
    console.log('enter press here! ')
    const Search = document.getElementById('Search');
    Search.focus()
    // window.history.go(`/search/?search=${event.target.value}`)
  }
  if(event.key === 13){
    console.log('Alt press here! ')
    // window.history.go(`/search/?search=${event.target.value}`)
  }
}
