import {useState } from 'react';
import './App.css';
import Cart from './Cart/Cart';
import Header from './component/Header/Header';
import User from './component/Users/User';
import jsonData from "./data.json";




function App() {
  const [cart, setCart] = useState([]);

  const handleAddSalary = (user) => {
 
    const newCart = [...cart, user];
   setCart(newCart);
 }
  return (
    <div className="App">
      <Header></Header>
      <h4>Total Number of Users {jsonData.length}</h4>
      
      <Cart cart={cart}></Cart>
     
      {
        jsonData.map (user => <User user={user} handleAddSalary={handleAddSalary} key={user.id}></User>)
      }
    </div>
  );
}


export default App;
