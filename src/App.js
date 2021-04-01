import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage/HomePage"; 
import Aboutus from "./components/Aboutus/Aboutus"; 
import DirectorProfile from "./components/DirectorProfile/DirectorProfile"; 
import WhyUs from "./components/WhyUs/WhyUs"; 
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WhyUs}/>
        <Route path="/WhyUs" exact component={WhyUs}/>
      </Switch>
    </Router>    
  );
}

export default App;
