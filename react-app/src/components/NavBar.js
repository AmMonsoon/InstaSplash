
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "./NavBar.css"
import logo from "../logo.png"


const NavBar = ({userId}) => {
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
          <NavLink to='/images/following' exact={true} activeClassName='active'>
        <div className="navbar__logo--wrapper">
            <img className="navbar__logo--image" src={logo} alt=""/>
        </div>
          </NavLink>

        {/* <div className="navbar__searchToBe"></div> */}
        <div className="navbar__buttons--wrapper">
            <NavLink to='/images/following' exact={true} activeClassName='active'>
              <div className="navbar__buttons--wrapper__button">
                  <i className="fas fa-home"></i>
              </div>
            </NavLink>

            <NavLink to={`/images/add`} exact={true} activeClassName='active'>
              <div className="navbar__buttons--wrapper__button">
                <i className="fas fa-plus"></i>
                {/* <i className="fas fa-home"></i> */}
              </div>
            </NavLink>

            <NavLink to={`/users/${userId}`} exact={true} activeClassName='active'>
              <div className="navbar__buttons--wrapper__button">
                <i className="far fa-user"></i>
                {/* <i className="fas fa-home"></i> */}
              </div>
            </NavLink>

            <NavLink to='/images/explore' exact={true} activeClassName='active'>
            <div className="navbar__buttons--wrapper__button">
                <i className="far fa-compass"></i>
              </div>
            </NavLink>

          <div className="navbar__buttons--wrapper__button"><LogoutButton /></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
