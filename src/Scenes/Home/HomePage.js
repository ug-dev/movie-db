import Search from "../../images/search-icon.svg";

function HomePage() {
  return (
    <div className="home-container">
      <div className="home-back-mask"></div>
      <div className="home-text">
        <h1>
          Welcome to MoviesDB <br /> explore your Movies or TV Series.
        </h1>
      </div>
      <div className="home-search">
        <input type="text" placeholder="Search movies or tv series..." />
        <img src={Search} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
