const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = { items: 0 }
/*
props - In React, props (short for properties) is a special keyword that allows you to pass data from a parent component to a child component. Props are read-only, meaning that the child component cannot modify the props directly.
*/