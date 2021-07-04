import Navigation from './Navigation';
import Home from './Home';
// import ProjectView from './ProjectView';
import Projects from './Projects';

import projectData from './json/project_detail.json';

import { useLocation, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  let location = useLocation();
  console.log(location);
  // let background = location.state && location.state.background;


  return (
    <div className="App">
      <Navigation />
      <Switch location={location}>
        <Route exact path="/" children={<Home />} />
        {
          projectData.data.map((d, i) => (
            <Route 
             key={i}
             path={d.path}
             component={ Projects[d.component] }
            />
          ))
        }
      </Switch>
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
