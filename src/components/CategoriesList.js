import Search from "../images/search-icon.svg";
import ComponentImg from "../images/component-img.jpg";
import { Link } from "react-router-dom";

const navstyle = {
  textDecoration: "none",
};

function CategoriesList() {
  const Compo = () => {
    return (
      <div className="component">
        <img src={ComponentImg} alt="" />
        <div className="component-title">
          <Link style={navstyle} to="/detail-page">
            <h3>The Avengers</h3>
          </Link>
          <p>May 26, 2019</p>
        </div>
      </div>
    );
  };

  return (
    <div className="categories-container">
      <div className="top-search">
        <h1>Latest Movies</h1>
        <div className="categories-search">
          <input type="text" placeholder="Search query" />
          <img src={Search} alt="" />
        </div>
        <select>
          <option>Movies</option>
          <option>TV Series</option>
        </select>
      </div>
      <div className="main-content">
        <Compo />
        <Compo />
        <Compo />
        <Compo />
        <Compo />
        <Compo />
        <Compo />
        <Compo />
        <Compo />
        <Compo />
        <Compo />
        <Compo />
      </div>
      <div className="view-more-button">
        <div className="button">
          <h2>View More</h2>
        </div>
      </div>
    </div>
  );
}

export default CategoriesList;
