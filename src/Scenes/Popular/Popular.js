import Search from "../../images/search-icon.svg";
import { Link } from "react-router-dom";
import {
  productDetail,
  productTvDetail,
  castDetail,
  castTvDetail,
} from "../Detail/DetailActions";
import { category } from "../GlobalActions";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { getPopularList, getPopularTvList } from "./PopularActions";
import Default from "../../images/default.jpg";
import { getSearchList } from "../Search/SearchActions";

const navstyle = {
  textDecoration: "none",
};

function Popular() {
  const { movieCategory, popularList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [pageCounter, setCounter] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setisLoading(true);
    window.scrollTo(0, 0);
    if (movieCategory) {
      dispatch(getPopularList());
    } else {
      dispatch(getPopularTvList());
    }
  }, []);

  useEffect(() => {
    setisLoading(false);
    window.scrollTo(0, 0);
  }, [popularList]);

  const getCounter = () => {
    setCounter(pageCounter + 1);
    if (movieCategory) {
      dispatch(getPopularList(pageCounter + 1));
    } else {
      dispatch(getPopularTvList(pageCounter + 1));
    }
  };

  const tvHandler = () => {
    window.scrollTo(0, 0);
    if (movieCategory) {
      setisLoading(true);
      dispatch(getPopularTvList());
      dispatch(category(false));
    }
  };
  const movieHandler = () => {
    window.scrollTo(0, 0);
    if (!movieCategory) {
      setisLoading(true);
      dispatch(getPopularList());
      dispatch(category(true));
    }
  };
  const Compo = ({ id, posterPath, title, relDate }) => {
    return (
      <div className={"myMovieCard"}>
        <Link style={navstyle} className="component" to={"/popular/" + id}>
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
        <h1>Popular {movieCategory ? "Movies" : "TV Series"}</h1>
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
          {popularList.map((e) => (
            <Compo
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

export default Popular;
