import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav color="navbar-dark bg-primary">
		Washington Post Headlines
	</Nav>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
	  <Nav bottom="fixed-bottom" color="navbar-light bg-light">
		<a href="https://newsapi.org" target="_blank" rel="noopener">Powered by News API</a>
	  </Nav>
    </div>
  </Router>
);

export default App;
