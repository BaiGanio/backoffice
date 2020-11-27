import backoffice from './images/backoffice.jpg';
import './App.css';
import Person from './Person/Person';
import React, {Component} from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  state = {
    persons: [
      {name:'Original Max', age:560},
      {name:'original J0J0', age:59}
    ],
    therState: 'some other state'
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons: [
        {name:'Changed state Fiki', age:561},
        {name: newName, age:60}
      ]
    })
  }
  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        {name:'Changed state Miki', age:661},
        {name: event.target.value, age:60}
      ]
    })
  }

  

  render() {
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
          <button
            style={style}
            onClick={this.switchNameHandler.bind(this, 'Button')}>Log In</button>
          
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Cllck event')}
            changed={this.nameChangedHandler}/> */}
        
        </header>
        <Layout>
              <BurgerBuilder />
            </Layout>
      </div>
    ); 
  }
}

export default App;




