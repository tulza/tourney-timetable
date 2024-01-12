import Home from "./Template/Home";
import Navigation from "./Template/Navigation";
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
      <div className="App flex h-[100vh] flex-col justify-between">
        <div className="Content m-20 flex h-[800px]  flex-col justify-center bg-black outline">
          <Switch>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
