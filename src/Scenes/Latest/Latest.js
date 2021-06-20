import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getSearchList } from "../Search/SearchActions";

import { category } from "../GlobalActions";
import { getLatestList, getLatestTvList } from "./LatestActions";
import Default from "../../images/default.jpg";

const navstyle = {
  textDecoration: "none",
};

function Latest() {
  const { movieCategory, latestList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [pageCounter, setCounter] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setisLoading(true);
    window.scrollTo(0, 0);
    if (movieCategory) {
      dispatch(getLatestList());
    } else {
      dispatch(getLatestTvList());
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, [latestList]);

  const getCounter = () => {
    setCounter(pageCounter + 1);
    if (movieCategory) {
      dispatch(getLatestList(pageCounter + 1));
    } else {
      dispatch(getLatestTvList(pageCounter + 1));
    }
  };

  const tvHandler = () => {
    if (movieCategory) {
      setisLoading(true);
      dispatch(getLatestTvList());
      dispatch(category(false));
    }
  };
  const movieHandler = () => {
    if (!movieCategory) {
      setisLoading(true);
      dispatch(getLatestList());
      dispatch(category(true));
    }
  };

  const Compo = ({ id, posterPath, title, relDate }) => {
    return (
      <div className={"myMovieCard"}>
        <Link
          // onClick={setDetailPage}
          style={navstyle}
          className="component"
          to={"/latest/" + id}
        >
          <img
            src={
              posterPath != null
                ? `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
                : Default
            }
            alt=""
          />
          <div className="component-title">
            <h3>{title}</h3>
            <p>{relDate}</p>
          </div>
        </Link>
      </div>
    );
  };

  const setSearchPage = () => {
    dispatch(getSearchList(query));
  };

  return (
    <div className="categories-container">
      <div className="top-search">
        <h1>Latest {movieCategory ? "Movies" : "TV Series"}</h1>
        <div className="categories-buttons">
          <button onClick={movieHandler} id={movieCategory && "active"}>
            Movies
          </button>
          <button onClick={tvHandler} id={!movieCategory && "active"}>
            TV Series
          </button>
        </div>
        <div className="searchCard">
          <h2>Search</h2>
          <div className="categories-search">
            <input
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder="Search query"
            />
            <Link style={navstyle} onClick={setSearchPage} to="/search-page">
              <div className="searchButton">Search</div>
            </Link>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="loadingContainer">Loading...</div>
      ) : (
        <div className="main-content">
          {latestList.map((e) => (
            <Compo
              key={e.id}
              id={e.id}
              posterPath={e.poster_path}
              title={e.title}
              relDate={e.release_date}
            />
          ))}
          <div className="view-more-button">
            <div onClick={getCounter} className="button">
              <h2>View More</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Latest;
