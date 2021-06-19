import Search from "../../images/search-icon.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productDetail } from "../Detail/DetailActions";
import { category } from "../GlobalActions";
import React, { useEffect, useState } from "react";
import { getTopRatedList, getTopRatedTvList } from "./TopRatedActions";

const navstyle = {
  textDecoration: "none",
};

function TopRated() {
  const { movieCategory, topRatedList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (movieCategory) {
      dispatch(getTopRatedList());
    } else {
      dispatch(getTopRatedTvList());
    }
  }, []);

  useEffect(() => {
    setisLoading(false);
  }, [topRatedList]);

  const tvHandler = () => {
    if (movieCategory) {
      setisLoading(true);
      dispatch(getTopRatedTvList());
      dispatch(category(false));
    }
  };
  const movieHandler = () => {
    if (!movieCategory) {
      setisLoading(true);
      dispatch(getTopRatedList());
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
            src={`	https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`}
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
        <h1>Top Rated {movieCategory ? "Movies" : "TV Series"}</h1>
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
        <div className="button">
          <h2>View More</h2>
        </div>
      </div>
    </div>
  );
}

export default TopRated;