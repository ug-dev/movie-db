import Search from "../../images/search-icon.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { productDetail } from "../Detail/DetailActions";
import { category } from "../GlobalActions";
import { getLatestList, getLatestTvList } from "./LatestActions";

const navstyle = {
  textDecoration: "none",
};

function Latest() {
  const { movieCategory, latestList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [pageCounter, setCounter] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (movieCategory) {
      dispatch(getLatestList());
    } else {
      dispatch(getLatestTvList());
    }
  }, []);

  useEffect(() => {
    setisLoading(false);
    window.scrollTo(0, 0);
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
          onClick={() => dispatch(productDetail(id))}
          style={navstyle}
          className="component"
          to="/detail-page"
        >
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`}
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

  return (
    <div className="categories-container">
      <div className="top-search">
        <h1>Latest {movieCategory ? "Movies" : "TV Series"}</h1>
        <div className="categories-search">
          <input type="text" placeholder="Search query" />
          <img src={Search} alt="" />
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
          <div>Loading...</div>
        ) : (
          latestList.map((e) => (
            <Compo
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
          <h2>View More</h2>
        </div>
      </div>
    </div>
  );
}

export default Latest;
