import "./App.css";
import HomePage from "./Scenes/Home/HomePage";
import Popular from "./Scenes/Popular/Popular";
import TopRated from "./Scenes/TopRated/TopRated";
import DetailPage from "./Scenes/Detail/DetailPage";
import NavBar from "./Scenes/Components/NavBar";
import SearchPage from "./Scenes/Search/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Latest from "./Scenes/Latest/Latest";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/popular" component={Popular} />
          <Route path="/top-rated" component={TopRated} />
          <Route path="/latest" component={Latest} />
          <Route path="/detail-page" component={DetailPage} />
          <Route path="/search-page" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
