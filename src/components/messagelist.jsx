import React from "react";

class MessageList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messageList"",
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({
      messagalist:e.target.value,
    })
  }
  onSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state.messagelist)
  }
  render() {
    return (
      <div className="app">
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
     </div>
    )
  }
}

    export default MessageList;


    class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {
          return (
           <li key={message.id}>
             <div>
               {message.senderId}
             </div>
             <div>
               {message.text}
             </div>
           </li>
         )
       })}
     </ul>
    )
  }
}







import React, { Component } from 'react'

class MessagesList extends Component {
  render() {
    const styles = {
      container: {
        overflowY: 'scroll',
        flex: 1,
      },
      ul: {
        listStyle: 'none',
      },
      li: {
        marginTop: 13,
        marginBottom: 13,
      },
      senderUsername: {
        fontWeight: 'bold',
      },
      message: { fontSize: 15 },
    }
    return (
      <div
        style={{
          ...this.props.style,
          ...styles.container,
        }}
      >
        <ul style={styles.ul}>
          {this.props.messages.map((message, index) => (
            <li key={index} style={styles.li}>
              <div>
                <span style={styles.senderUsername}>{message.senderId}</span>{' '}
                <div><img src="https://png.icons8.com/nolan/2x/speech-bubble.png"/></div>
              </div>
              <p style={styles.message}>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessagesList
