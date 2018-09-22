import React, { Component } from 'react'
import Username from "./components/username.jsx"
import ChatScreen from './ChatScreen.js'
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentScreen :'WhatIsYourUsernameScreen',
      currentUsername:''
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }
  onUsernameSubmitted(username){
    fetch('http://localhost:3001/users',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({username}),
    })
    .then(() => {
      this.setState({
        currentUsername:username,
        currentScreen: 'ChatScreen'
      })
    })
    .catch(error=>{
      console.error(error)
    })
  }
  render() {
    return (
      <div>
    {this.state.currentScreen === 'WhatIsYourUsernameScreen' ?
      <Username onSubmit={this.onUsernameSubmitted} />
      :
      <ChatScreen currentUsername={this.state.currentUsername} />}
      </div>
  )}
}
export default App
