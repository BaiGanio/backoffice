import backoffice from './images/backoffice.jpg';
import './App.css';
import Person from './Person/Person';
import React from 'react';


const App = props => {
//  const [personsState, setPersonsState] = useState({
//   persons: [
//     {name:'Max', age:560},
//     {name:'J0J0', age:59}
//   ],
//   therState: 'some other state'
// });

  // const switchNameHandler = (newName) =>{
  //   this.setPersonsState({
  //     persons: [
  //       {name:'Fiki', age:561},
  //       {name: newName, age:60}
  //     ]
  //   })
  // }
  // nameChangedHandler = (event) =>{
  //   console.log('Was clicked!');
  // }

  const style = {
    backgoundColor:"pink",
    font: 'inherit',
    border: '1px solid black',
    paddin: '8px',
    cursor: 'pointer',
    fontSize:'2em'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to BackOffice ;)
        </h1>
      
        <img src={backoffice} className="App-logo" alt="logo" />
        <br/>
        <button style={style}>Log In</button>
        <Person name='Fiki' age='20'/>
        <Person name='s' age='90'/>
      
      </header>
    </div>
  ); 
}

export default App;




