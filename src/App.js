import './App.css';
import {
  Route,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/friend/:friendId">
          <FriendDetail></FriendDetail>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
    
    
  );
}

export default App;
