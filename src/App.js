/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path={"/challenge-react"} exact component={Home} />
          <Route path={"/search"} exact component={Search} />
          <Route path={"/search/:id"} exact component={Details} />
          <Route path={"/challenge-react/:id"} exact component={Details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
