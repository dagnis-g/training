import './App.css';
import DriverStandings from './components/DriverStandings';
import ConstructorStandings from './components/ConstructorStandings';
import logo from './f1logo.png';

function App() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="f1logo" className="logo" />
      </div>

      <div className="mainContainer">
        <DriverStandings />
        <ConstructorStandings />
      </div>
    </>
  );
}

export default App;
