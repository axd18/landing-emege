import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testeando texto
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <a
          className="App-link"
          href="https://emegecalefaccion.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          testeando link a emege
        </a>
      </header>
    </div>
  );
}

export default App;
