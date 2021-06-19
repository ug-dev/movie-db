import Search from "../../images/search-icon.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productDetail, productTvDetail } from "../Detail/DetailActions";
import { category } from "../GlobalActions";
import React, { useEffect, useState } from "react";
import { getTopRatedList, getTopRatedTvList } from "./TopRatedActions";
import Default from "../../images/default.jpg";

const navstyle = {
  textDecoration: "none",
};

function TopRated() {
  const { movieCategory, topRatedList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [pageCounter, setCounter] = useState(1);

  useEffect(() => {
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
      } else {
        dispatch(productTvDetail(id));
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
            <input type="text" placeholder="Search query" />
            {/* <img src={Search} alt="" /> */}
            <div className="searchButton">Search</div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="loadingContainer">Loading...</div>
      ) : (
        <div className="main-content">
          {topRatedList.map((e) => (
            <Compo
              id={e.id}
              posterPath={e.poster_path}
              title={e.title}
              relDate={e.release_date}
            />
          ))}
          <div onClick={getCounter} className="view-more-button">
            <div className="button">
              <h2>View More</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopRated;
