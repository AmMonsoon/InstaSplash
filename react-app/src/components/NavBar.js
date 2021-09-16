
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "./NavBar.css"
import logo from "../logo.png"



const NavBar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
          <NavLink to='/' exact={true} activeClassName='active'>
        <div className="navbar__logo--wrapper">
            <img className="navbar__logo--image" src={logo} alt=""/>
        </div>
          </NavLink>
        {/* <div className="navbar__searchToBe"></div> */}
        <div className="navbar__buttons--wrapper">
            <NavLink to='/' exact={true} activeClassName='active'>
              <div className="navbar__buttons--wrapper__button">
                <i class="fas fa-home"></i>
              </div>
            </NavLink>
            <NavLink to='/login' exact={true} activeClassName='active'>
              <div className="navbar__buttons--wrapper__button">
                  <i class="fas fa-sign-in-alt"></i>
              </div >
            </NavLink>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              <div className="navbar__buttons--wrapper__button">
                  <i class="fas fa-user-plus"></i>
              </div>
            </NavLink>
            <NavLink to='/users' exact={true} activeClassName='active'>
              <div className="navbar__buttons--wrapper__button">
                  <i class="fas fa-users"></i>
              </div>
            </NavLink>
          {/* <i class="far fa-user">SINGLE USER</i> */}
          {/* <i class="far fa-compass">COMPASS FOR EXPLORE</i> */}
          {/* <i class="fas fa-angle-double-right">DOUBLE ARROW DOWN FOR LOGOUT</i> */}
          <div className="navbar__buttons--wrapper__button"><LogoutButton /></div>
        </div>
      </div>
    </div>
    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to='/' exact={true} activeClassName='active'>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
          // <NavLink to='/login' exact={true} activeClassName='active'>
          //   Login
          // </NavLink>
    //     </li>
    //     <li>
          // <NavLink to='/sign-up' exact={true} activeClassName='active'>
          //   Sign Up
          // </NavLink>
    //     </li>
    //     <li>
          // <NavLink to='/users' exact={true} activeClassName='active'>
          //   Users
          // </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton />
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default NavBar;
