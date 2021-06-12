import "./App.css";
import HomePage from "./components/HomePage";
import CategoriesList from "./components/CategoriesList";
import DetailPage from "./components/DetailPage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/categories" component={CategoriesList} />
          <Route path="/detail-page" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
