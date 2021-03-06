import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks=['Bappa','Manna','Razzak','Josim','Shuvo']
  const products=[
  {name:'Photoshop',price:'$90.99'},
  {name:'Illustrator',price:'$80'},
  {name:'PDF',price:'$99.99'},
    {name:'Premiam',price:'$299.99'}

  ]

  return (
    <div className="App">
      <header className="App-header">
      <p>I Am React Person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {nayoks.map(nayok => <li>{nayok}</li>)}
      {products.map(pd => <li>{pd.name}</li>)}
      </ul>
      {
        products.map(product => <Product product={product}></Product>)
      }
      <Person name="Munna" job="football"></Person>
      <Person name="Mamun" job="dekha"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers] =useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
  <div>
    <h3>Dynamic Users: {users.length}</h3>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
  </div>
  )
}

function Counter(){
  const [count,setCount] =useState(10);
  const handleIncrease =() =>setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price} =props.product;
  return (
    <div style={productStyle}>
      <h3>{name} </h3>
      <h5> {price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid gold',width:'400px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
