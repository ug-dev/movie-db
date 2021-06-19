import ComponentImg from "../../images/component-img.jpg";
import Cast from "../../images/component-img.jpg";
import NetworkIMG from "../../images/network.png";
import Season from "../../images/season.jpg";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

function DetailPage() {
  const { movieCategory, productDetail } = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Item = () => {
    return (
      <div className="component">
        <img src={Cast} alt="" />
        <div className="component-title">
          <h3>Chris Evans</h3>
          <p>Captain America / Steve Rogers</p>
        </div>
      </div>
    );
  };

  const SeasonComp = ({ path, title, realeaseDate, episodes, info }) => {
    return (
      <div className="season-info">
        <img
          src={`https://www.themoviedb.org/t/p/w130_and_h195_bestv2${path}`}
          alt=""
        />
        <div className="card-detail">
          <h1>{title}</h1>
          <p id="subtitle">{`${realeaseDate} | ${episodes} Episodes`}</p>
          <p id="info">{info}</p>
        </div>
      </div>
    );
  };

  const Network = () => {
    return (
      <div className="network">
        <img
          src={`https://www.themoviedb.org/t/p/h30${productDetail.network}`}
          alt=""
        />
        <p>Network</p>
      </div>
    );
  };

  const backStyle = {
    backgroundImage: `url(
      https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${productDetail.backdrop_path})`,
  };

  return (
    <div className="detail-container">
      <div className="detail">
        <div style={backStyle} className="bg-mask"></div>
        <div className="poster">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${productDetail.poster_path}`}
            alt=""
          />
        </div>
        <div className="info">
          <div className="title">
            <h1>{productDetail.title}</h1>
            <div className="subtitle">
              <p>{productDetail.release_date}</p>
              <p>{productDetail.generes}</p>
            </div>
          </div>
          <div className="rattings">
            <div className="user-score">
              <div className="circle">
                <p>{productDetail.vote_average}</p>
              </div>
              <p>User Score</p>
            </div>
            {movieCategory === false ? <Network /> : ""}
          </div>
          <div className="overview">
            <h2>Overview</h2>
            <p>{productDetail.overview}</p>
          </div>
        </div>
      </div>
      <div className="cast-detail">
        <h1>Full Cast</h1>
        <div className="cast-scroll">
          <Item />
        </div>
      </div>
      <div className="seasons-detail">
        <div className="title">
          <h1>Seasons</h1>
        </div>
        {productDetail.seasons.map((e) => (
          <SeasonComp key={e.id} />
        ))}
      </div>
      <div className="view-more-button">
        <div className="button">
          <h2>View More</h2>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
