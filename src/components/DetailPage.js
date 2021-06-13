import React, { useRef } from "react";
import ComponentImg from "../images/component-img.jpg";
import Cast from "../images/cast.jpg";
import Network from "../images/network.png";
import AliceCarousel from "react-alice-carousel";
import Season from "../images/season.jpg";
import "react-alice-carousel/lib/alice-carousel.css";

function DetailPage() {
  const myRef = useRef();

  const Item = () => {
    return (
      <div className="component">
        <img src={Cast} alt="" />
        <div className="component-title">
          <h3>The Avengers</h3>
          <p>May 26, 2019</p>
        </div>
      </div>
    );
  };

  const SeasonComp = () => {
    return (
      <div className="season-info">
        <img src={Season} alt="" />
        <div className="card-detail">
          <h1>Season 8</h1>
          <p id="subtitle">2019 | 6 Episodes</p>
          <p id="info">
            The Great War has come, the Wall has fallen and the Night King's
            army of the dead marches towards Westeros. The end is here, but who
            will take the Iron Throne?
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="detail-container">
      <div className="detail">
        <div className="bg-mask"></div>
        <div className="poster">
          <img src={ComponentImg} alt="" />
        </div>
        <div className="info">
          <div className="title">
            <h1>Avengers: Endgame</h1>
            <div className="subtitle">
              <p>May 26, 2019</p>
              <p>Adventure, Sci-Fi, Action</p>
            </div>
          </div>
          <div className="rattings">
            <div className="user-score">
              <div className="circle">
                <p>80%</p>
              </div>
              <p>User Score</p>
            </div>
            <div className="network">
              <img src={Network} alt="" />
              <p>Network</p>
            </div>
          </div>
          <div className="overview">
            <h2>Overview</h2>
            <p>
              After the devastating events of Avengers: Infinity War, the
              universe is in ruins due to the efforts of the Mad Titan, Thanos.
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos' actions and restore order to the
              universe once and for all, no matter what consequences may be in
              store.
            </p>
          </div>
        </div>
      </div>
      <div className="cast-detail">
        <h1>Full Cast</h1>
        <AliceCarousel
          mouseTracking={true}
          disableButtonsControls={true}
          disableDotsControls={true}
          infinite={false}
          responsive={{
            1024: { items: 5 },
          }}
        >
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </AliceCarousel>
      </div>
      <div className="seasons-detail">
        <div className="title">
          <h1>Seasons</h1>
        </div>
        <SeasonComp />
        <SeasonComp />
        <SeasonComp />
        <SeasonComp />
        <SeasonComp />
        <SeasonComp />
        <SeasonComp />
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
