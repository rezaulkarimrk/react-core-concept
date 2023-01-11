import React,{useState, useEffect} from 'react';

function App() {
  const products = [
    {name: 'Photoshop' , prich: '$90.99'},
    {name: 'Ilistretor' , prich: '$60.99'},
    {name: 'LightRoom' , prich: '$40.99'},
    {name: 'Premier' , prich: '$99.99'},
    {name: 'PDF Reader', prich: '$0.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Products products = {products[0]} ></Products>
        <Products products = {products[1]} ></Products>

        <Products products = {products[2]} ></Products>
        <Products products = {products[3]} ></Products>
        <Products products = {products[4]} ></Products>
        <Counter></Counter>
        <AllProduct products={products}></AllProduct>

        <Users></Users>

      </header>
    </div>
  );
}

const Counter = () =>{
  const [Counter, setCounter] = useState(0);

  // const handleCounter = () => setCounter( Counter+1);

  return <div>
    <br></br>
    <h3>{Counter}</h3>
    <button onClick={()=>setCounter(Counter-1)} >Decress</button>
    <button onMouseMove={() => setCounter( Counter+1)} >Incress</button>
  </div>
}
const Users = () =>{
  const [users, setUsers] = useState ([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [ ])
  return(
    <div>
      <h3>Dynamic Users {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
      </ul>
    </div>
  )
}

const AllProduct = (props) =>{
  const productStyle = {

    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '17%',
    float: 'left',
    padding: '15px'

  }

  const [products, setProducts] = useState(props.products);

  return (<div>
    {
      products.map(item => {
        const {name, prich} = item;
        return <div style={productStyle} >
          <h3>{name}</h3>
          <h5>{prich}</h5>
          <button>Buy Now</button>
        </div>
      })
    }
  </div>);
}


const Products =(props) =>{
  const productStyle = {

    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '17%',
    float: 'left',
    padding: '15px'

  }

  const {name, prich} = props.products;

  return <div style={productStyle} >
    <h3>{name}</h3>
    <h5>{prich}</h5>
    <button>Buy Now</button>
  </div>

} 

export default App;
