class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // The handleChange() method should update the input with what the user is typing.

/*input: event.target.value means that we are updating the input property in the component's state with the current value of the input field when the onChange event is triggered. This is commonly used to keep the component's state in sync with the user input.*/

/*this.state.messages refers to the current value of the messages property in the component's state.*/
handleChange(event){
   this.setState({
     input:event.target.value,
     messages:this.state.messages
   })
}
submitMessage(){
   this.setState({
     input:"",
     messages:[...this.state.messages,this.state.input]
   })
}
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};