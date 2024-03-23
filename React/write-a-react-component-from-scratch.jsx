// Define a React component called MyComponent that extends React.Component
class MyComponent extends React.Component {
  // Constructor method for initializing the component
  constructor(props) {
    super(props); // Call the parent class constructor
  }

  // Render method to define the component's UI
  render() {
    return (
      <div id="challenge-node">
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

// Render the MyComponent component to the DOM
ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"))
