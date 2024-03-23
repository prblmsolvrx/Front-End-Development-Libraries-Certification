// Define a React component called TypesOfFood that extends React.Component
class TypesOfFood extends React.Component {
  // Constructor method for initializing the component
  constructor(props) {
    super(props); // Call the parent class constructor
  }

  // Render method to define the component's UI
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Placeholder for rendering Fruits component */}
        <Fruits/>
        {/* Placeholder for rendering Vegetables component */}
        <Vegetables/>
      </div>
    );
  }
};

// Render the TypesOfFood component to the DOM
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"))
