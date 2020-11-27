import backoffice from './assets/images/backoffice.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to BackOffice ;)
        </h1>
        
        <img src={backoffice} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
