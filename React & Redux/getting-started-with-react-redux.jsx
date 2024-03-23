class DisplayMessages extends React.Component {
  // Change code below this line
  // Constructor method to initialize the component's state
  constructor(props) {
    super(props);
    /* Initialize state with an empty input field and an empty array for messages
    super() is used inside a constructor to call the constructor of the parent class. This is necessary if you want to access the parent class's methods or properties from the child class.*/
    this.state = {
      input: "",
      messages: []
    };
  }
  // Change code above this line

  // Render method to define the component's UI
  render() {
    return <div />;
  }
};
