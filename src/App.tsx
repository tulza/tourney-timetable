import Home from "./Components/Home";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/tourney-timetable/">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
