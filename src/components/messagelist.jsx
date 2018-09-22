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
