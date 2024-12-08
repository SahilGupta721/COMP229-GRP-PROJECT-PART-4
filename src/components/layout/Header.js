/*
Web App Name = SELL USED PRODUCTS SITE

Description = Motive of this full-stack application is to allow users to perform CRUD operations on Advertisements related to any product, also users can post and see questions and answers.

GROUP-2, ELITES
SAHIL GUPTA(Product Manager)
Student_Id = 301436261
MICHAEL ASFEHA(Senior Software Engineer)
Student_Id = 301411864
*/


import { Outlet, NavLink, Link, useNavigate } from "react-router-dom";
import image_logo from "../../assets/images/elites-logo.png";
import { isAuthenticated, getUsername, clearJWT } from "../auth/auth-helper";

const Header = () => {
  let navigate = useNavigate();

  const signoutClick = () => {
    clearJWT();
    navigate("/ads/list");
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={image_logo} alt="logo" style={{ width: 40 }} />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  <i className="fa-solid fa-address-book"></i> About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                  <i className="fa-solid fa-ad"></i> Ads
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/ads/list">
                      <i className="fa-regular fa-rectangle-list"></i> Ads List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/ads/add">
                      <i className="fa-solid fa-square-plus"></i> Add a new Ad
                    </NavLink>
                  </li>
                </ul>
              </li>
              {!isAuthenticated() && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users/signup">
                    <i className="fa-solid fa-user-plus"></i> SignUp
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                {!isAuthenticated() && (
                  <NavLink className="nav-link" to="/users/signin">
                    <i className="fa-solid fa-right-to-bracket"></i> SignIn
                  </NavLink>
                )}
                {isAuthenticated() && (
                  <Link className="nav-link" to="/" onClick={signoutClick}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    SignOut ({getUsername()})
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
