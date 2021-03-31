import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage/HomePage"; 
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
      </Switch>
    </Router>    
  );
}

export default App;
