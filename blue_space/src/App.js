import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="nav">
            <Link to="/">
              <h1>Home</h1>
            </Link>
          </nav>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
