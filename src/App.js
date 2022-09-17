import './App.css';
import {
  Route,
  Router,
  Switch,
  Link,
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path= "/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
