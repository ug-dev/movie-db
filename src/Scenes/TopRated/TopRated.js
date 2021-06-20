import Search from "../../images/search-icon.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  productDetail,
  productTvDetail,
  castDetail,
  castTvDetail,
} from "../Detail/DetailActions";
import { category } from "../GlobalActions";
import React, { useEffect, useState } from "react";
import { getTopRatedList, getTopRatedTvList } from "./TopRatedActions";
import Default from "../../images/default.jpg";
import { getSearchList } from "../Search/SearchActions";

const navstyle = {
  textDecoration: "none",
};

function TopRated() {
  const { movieCategory, topRatedList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [pageCounter, setCounter] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setisLoading(true);
    window.scrollTo(0, 0);
    if (movieCategory) {
      dispatch(getTopRatedList());
    } else {
      dispatch(getTopRatedTvList());
    }
  }, []);

  useEffect(() => {
    setisLoading(false);
    window.scrollTo(0, 0);
  }, [topRatedList]);

  const getCounter = () => {
    setCounter(pageCounter + 1);
    if (movieCategory) {
      dispatch(getTopRatedList(pageCounter + 1));
    } else {
      dispatch(getTopRatedTvList(pageCounter + 1));
    }
  };

  const tvHandler = () => {
    window.scrollTo(0, 0);
    if (movieCategory) {
      setisLoading(true);
      dispatch(getTopRatedTvList());
      dispatch(category(false));
    }
  };
  const movieHandler = () => {
    window.scrollTo(0, 0);
    if (!movieCategory) {
      setisLoading(true);
      dispatch(getTopRatedList());
      dispatch(category(true));
    }
  };

  const Compo = ({ id, posterPath, title, relDate }) => {
    const setDetailPage = () => {
      if (movieCategory) {
        dispatch(productDetail(id));
        dispatch(castDetail(id));
      } else {
        dispatch(productTvDetail(id));
        dispatch(castTvDetail(id));
      }
    };

    return (
      <div className={"myMovieCard"}>
        <Link
          onClick={setDetailPage}
          style={navstyle}
          className="component"
          to="/detail-page"
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
        <h1>Top Rated {movieCategory ? "Movies" : "TV Series"}</h1>
        <div className="categories-search">
          <input
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search query"
          />
          <Link onClick={setSearchPage} to="/search-page">
            <img src={Search} alt="" />
          </Link>
        </div>
        <div className="categories-buttons">
          <button onClick={movieHandler} id="movies">
            Movies
          </button>
          <button onClick={tvHandler}>TV Series</button>
        </div>
      </div>
      <div className="main-content">
        {isLoading ? (
          <div id="not-found">Loading...</div>
        ) : (
          topRatedList.map((e) => (
            <Compo
              key={e.id}
              id={e.id}
              posterPath={e.poster_path}
              title={e.title}
              relDate={e.release_date}
            />
          ))
        )}
      </div>
      <div className="view-more-button">
        <div onClick={getCounter} className="button">
          <h2>Next Page</h2>
        </div>
      </div>
    </div>
  );
}

export default TopRated;
