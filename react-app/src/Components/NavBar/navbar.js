import {React, useState} from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="logo">
          <div className="logo">Glamour</div>
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink className="nav-links" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-links" to="productDetail">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-links" to="">Offers</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-links" to="">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-links" to="">Contact</NavLink>
          </li>
          <li className="nav-item">
            <div class="searchBox">
              <input
                class="searchInput"
                type="text"
                name=""
                placeholder="Search"
              />
              <button class="searchButton" href="#">
                <i className="fas fa-search navColorItems"></i>
              </button>
            </div>
          </li>
          <li className="nav-item">
            <i className="material-symbols-sharp navColorItems">shopping_bag</i>
          </li>
          <li className="nav-item">
            <i className="material-symbols-sharp navColorItems">
              account_circle
            </i>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
            {click ? (
              <i className="material-symbols-sharp navColorItems">menu</i>
            ) : (
              <i className="material-symbols-sharp navColorItems">menu</i>
            )}
        </div>
      </div>
    </nav>
  );
}
