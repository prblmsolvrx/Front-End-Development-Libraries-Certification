{/*Render HTML Elements to the DOM*/}
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line

{/*ReactDOM.render(<item to be rendered>, <where to be rendered>);*/}

ReactDOM.render(JSX,document.getElementById('challenge-node'));