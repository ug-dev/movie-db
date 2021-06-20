import Default from "../../images/default.jpg";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function DetailPage() {
  const { movieCategory, productDetail, castDetail } = useSelector(
    (state) => state
  );
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setisLoading(true);
  }, []);

  useEffect(() => {
    setisLoading(false);
    window.scrollTo(0, 0);
  }, [productDetail]);

  const Item = ({ path, title, subtitle }) => {
    return (
      <div className="component">
        <img
          src={`https://www.themoviedb.org/t/p/w138_and_h175_face${path}`}
          alt=""
        />
        <div className="component-title">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  const SeasonComp = ({ path, title, realeaseDate, episodes, info }) => {
    return (
      <div className="season-info">
        <img
          src={
            path !== null
              ? `https://www.themoviedb.org/t/p/w130_and_h195_bestv2${path}`
              : Default
          }
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

  const Network = ({ path }) => {
    return (
      <div className="network">
        <img
          src={path !== null ? `https://www.themoviedb.org/t/p/h30${path}` : ""}
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

  const SeasonContainer = ({ seasonDetail }) => {
    return (
      <div className="seasons-detail">
        <div className="title">
          <h1>Seasons</h1>
        </div>
        {seasonDetail.map((e) => (
          <SeasonComp
            key={e.id}
            path={e.poster_path}
            title={e.name}
            realeaseDate={e.air_date}
            episodes={e.episode_count}
            info={e.overview}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="detail-container">
      <div className="detail">
        <div style={backStyle} className="bg-mask"></div>
        <div className="poster">
          <img
            src={
              productDetail.poster_path !== null
                ? `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${productDetail.poster_path}`
                : Default
            }
            alt=""
          />
        </div>
        <div className="info">
          <div className="title">
            <h1>{productDetail.title}</h1>
            <div className="subtitle">
              <p id="rel-date">{productDetail.release_date}</p>
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
            {!movieCategory ? <Network path={productDetail.network} /> : ""}
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
          {castDetail.length !== 0
            ? castDetail.map((e) => (
                <Item
                  key={e.id}
                  path={e.profile_path}
                  title={e.name}
                  subtitle={e.character}
                />
              ))
            : ""}
        </div>
      </div>
      {isLoading ? (
        <div id="not-found">Loading...</div>
      ) : movieCategory ? (
        ""
      ) : typeof productDetail.seasons !== "undefined" ? (
        <SeasonContainer seasonDetail={productDetail.seasons} />
      ) : (
        ""
      )}
    </div>
  );
}

export default DetailPage;
