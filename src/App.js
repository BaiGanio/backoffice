import backoffice from './assets/images/backoffice.jpg';
import './App.css';
import Button from '@material-ui/core/Button';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';

function App() {
  return (
    <div className="App">
    <PrimarySearchAppBar/>

      <header className="App-header">
      <img src={backoffice} className="App-logo" alt="logo" />
      <p>
      Welcome to BackOffice
      </p>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      </header>

    </div>
  );
}

export default App;
