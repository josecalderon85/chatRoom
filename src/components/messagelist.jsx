import React from "react";

class MessageList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      messageList"",
    }
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
