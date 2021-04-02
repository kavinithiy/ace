import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage/HomePage"; 
import Aboutus from "./components/Aboutus/Aboutus"; 
import DirectorProfile from "./components/DirectorProfile/DirectorProfile"; 
import WhyUs from "./components/WhyUs/WhyUs"; 
import Product from "./components/Product/Product"; 
import Quality from "./components/Quality/Quality"; 
import Career from "./components/Career/Career"; 
import Enquiry from "./components/Enquiry/Enquiry"; 
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Career}/>        
        <Route path="/HomePage" exact component={HomePage}/>
        <Route path="/Aboutus" exact component={Aboutus}/>
        <Route path="/DirectorProfile" exact component={DirectorProfile}/>
        <Route path="/WhyUs" exact component={WhyUs}/>
        <Route path="/Product" exact component={Product}/>
        <Route path="/Quality" exact component={Quality}/>
        <Route path="/Career" exact component={Career}/>
        <Route path="/Enquiry" exact component={Enquiry}/>
      </Switch>
    </Router>    
  );
}

export default App;
