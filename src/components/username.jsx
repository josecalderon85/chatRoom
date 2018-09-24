import React from "react";

class Username extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username:"",
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e){
    this.setState({
      username:e.target.value,
    })
  }

  onSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }

    render(){
      return(
      <center><div id= "content">
      <div>
      <h1>
 <img id="hello" src="https://png.icons8.com/doodle/2x/hello.png"/> Welcome To MxChat ^_^</h1>
        <form onSubmit={this.onSubmit}>
          <input ClassName="textbox" type="text" placeholder="What is your name?" onChange={this.onChange}/>
            <input type="Submit" />
          </form>
          <div><img src="https://png.icons8.com/nolan/2x/speech-bubble.png"/></div>
          </div>

      </div></center>
    );
  }
}
export default Username;
