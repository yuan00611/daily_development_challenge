import './App.css';
import Hero from './Hero';
import Navigation from './Navigation';
// import WorkList from './WorkList';
import WorkSection from './WorkSection';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <WorkSection />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
