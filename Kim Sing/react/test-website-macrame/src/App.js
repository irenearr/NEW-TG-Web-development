import React, {useState} from 'react';
import Tweet from './tweet';
import './App.css';

function App () {

  const [count, setCount] = useState (0);

  const [isRed, setRed] = useState (false);

  // const [user, setUser] = useState({
  //   name: 'Ed', 
  //   age: 25,
  //   posts: ['My first post', 'My lovely summer', 'My favorite food'];
  // })

  const [users, setUsers] = useState([
    {name: "Jan Stok", message: "Hello there"},
    {name:"Ruben Terlou", message: "Langs de oevers van de Yangtse"},
    {name: "Marie Bos", message: "Mijn kitten is een snoepje"},
    {name: "Renske Pietersen", message: "React is leuk!"}
  ]);

  // const increment = () => {
  //   setCount (count + 1);
  //   setRed (!isRed);
  // }
/* ? staat voor if en : staat voor else, 'red' staat voor de .red opmaak in css en '' betekent geen opmaak. ! staat voor het tegenovergestelde van wat het nu is, dus als het nu true is wordt het false en andersom */
  // return <div className="app">
  //   <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
  //   <button onClick={increment}>increment</button>
  //   <h1>{count}</h1>
  //   <Tweet name="Jan Stok" message="This is a random tweet"/>
  //   <Tweet name="Ruben Terlou" message="Langs de oevers van de Yangtse"/>
  //   <Tweet name="Marie Bos" message="Mijn kitten is een snoepje"/>
  //   <Tweet name="Renske Pietersen" message="React is leuk!"/>
  // </div>

  return <div className="app">
    {users.map(user =>(
      <Tweet name={user.name} message={user.message} />
    ))}
  </div>
}

export default App;
