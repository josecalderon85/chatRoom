import React, { Component } from 'react'
import Username from "./components/username.jsx"

class App extends React.Component {
  render() {
    return (
      <div>
        <Username onSubmit={username => alert(username)} />
      </div>
    );
  }
}

export default App
