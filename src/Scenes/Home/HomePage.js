import Search from "../../images/search-icon.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearchList } from "../Search/SearchActions";
import React, { useState } from "react";

function HomePage() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const setSearchPage = () => {
    dispatch(getSearchList(query));
  };

  return (
    <div className="home-container">
      <div className="home-back-mask"></div>
      <div className="home-text">
        <h1>
          Welcome to MoviesDB <br /> explore your Movies or TV Series.
        </h1>
      </div>
      <div className="home-search">
        <input
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Search movies or tv series..."
        />
        <Link onClick={setSearchPage} to="/search-page">
          <img src={Search} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
