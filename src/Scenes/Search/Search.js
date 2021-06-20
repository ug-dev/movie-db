import SearchIcon from "../../images/search-icon.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getSearchList } from "../Search/SearchActions";
import { category } from "../GlobalActions";
import {
  productDetail,
  productTvDetail,
  castDetail,
  castTvDetail,
} from "../Detail/DetailActions";
import Default from "../../images/default.jpg";

const navstyle = {
  textDecoration: "none",
};

function Search() {
  const { searchList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setisLoading(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setisLoading(false);
    window.scrollTo(0, 0);
  }, [searchList]);

  const Compo = ({ id, mediaType, posterPath, title, relDate }) => {
    const setDetailPage = () => {
      if (mediaType !== "tv") {
        dispatch(category(true));
        dispatch(productDetail(id));
        dispatch(castDetail(id));
      } else {
        dispatch(category(false));
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
        <h1>Search Result</h1>
        <div className="categories-search">
          <input
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search query"
          />
          <img onClick={setSearchPage} src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="main-content">
        {isLoading ? (
          <div id="not-found">Loading...</div>
        ) : searchList.length === 0 ? (
          <div id="not-found">Data Not Found!</div>
        ) : (
          searchList.map((e) => (
            <Compo
              key={e.id}
              id={e.id}
              mediaType={e.media_type}
              posterPath={e.poster_path}
              title={e.media_type === "tv" ? e.name : e.title}
              relDate={e.media_type === "tv" ? e.date : e.release_date}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
