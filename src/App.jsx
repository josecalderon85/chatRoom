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


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
     </div>
    )
  }
}


export default App
