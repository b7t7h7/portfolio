import React from 'react';
import './App.css';
import { HashRouter as HashRouter, Route, Link, Switch } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPg from "./pages/about";
import PortfolioPg from "./pages/portfolio";
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={AboutPg} />
      <Route exact path="/Portfolio" component={PortfolioPg} />
    </Switch>
  );
}

export default App;
