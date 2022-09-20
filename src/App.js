import './App.css';
import {
  Route,
  Router,
  Switch,
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  
  return (
    
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
