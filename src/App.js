import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Actors from "./Components/Actors";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Switch>
            <Route path="/actors">
              <Actors />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
