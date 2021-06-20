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
          <Route path="/popular" exact component={Popular} />
          <Route path="/popular/:id" component={DetailPage} />
          <Route path="/top-rated" exact component={TopRated} />
          <Route path="/top-rated/:id" component={DetailPage} />
          <Route path="/latest" exact component={Latest} />
          <Route path="/latest/:id" component={DetailPage} />
          <Route path="/search-page" exact component={SearchPage} />
          <Route path="/search-page/:id" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
