import React, { Component } from 'react'
import Username from "./components/username.jsx"


class App extends React.Component {
  constructor(){
  super()
  this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
}
onUsernameSubmitted(username) {
  fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({username}),
  })
  .then(response => {
    console.log("success");
  })
  .catch(error => {
    console.error(error)
  })
}
  render() {
    return (
      <div>
        <Username onSubmit={this.onUsernameSubmitted} />
      </div>
    );
  }
}



export default App
