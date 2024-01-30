import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/companyLogo.png";
import profile from "../../assets/profile.svg";
import Dropdown from "react-bootstrap/Dropdown";
import { FaRegUserCircle } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import NavDropdown from "react-bootstrap/NavDropdown";

const Team_A_HeaderV2 = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMobileNavbar = () => {
    setClicked(false);
    setMyCourseActive(false);
  };

  // Add or remove the 'no-scroll' class based on the 'clicked' state
  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = ''; // Cleanup on component unmount
    };
  }, [clicked]);

  return (
    <>
      <nav className="navbar_TeamD">
        <NavLink to="/" onClick={closeMobileNavbar}>
          <img src={logo} alt="Logo" />
        </NavLink>
        <div>
          <ul id="navbar" className={clicked ? "active" : ""}>
            <li className="profile_info">
              <span className="profile_info_con">
                <img src={profile} alt="Logo" />
                <span className="profile_info_name">
                  <p className="profile_fName">Joshua Allada</p>
                  <p className="profile_email">jallada.@tgsi.com.ph</p>
                </span>
              </span>
            </li>
            <li className="profile_link">
              <NavLink
                to=""
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Profile
              </NavLink>
            </li>
            <li className="profile_link">
              <NavLink
                to=""
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Certificate
              </NavLink>
            </li>
            <li className="divider"></li>
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="My Course"
                menuVariant="dark"
                className="mycourse_dd"
              >
                <NavDropdown.Item href="#action/3.1" activeClassName="active">
                  Problem Overview
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" activeClassName="active">
                  Assessment
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Forums
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                onClick={closeMobileNavbar}
              >
                Verification
              </NavLink>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={handleClick}>
          {clicked ? (
            <i className="fas fa-times"></i>
          ) : (
            <img src={profile} alt="Logo" className="mobile_profile" />
          )}
        </div>
        <div className="profile_side">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="button_profile"
            >
              <img src={profile} alt="" className="profile_img" />
              Hi, JALLADA!
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">
                <FaRegUserCircle /> Profile
              </Dropdown.Item>
              <Dropdown.Item
                as={NavLink}
                to="/certificate"
                onClick={closeMobileNavbar}
              >
                <TbCertificate /> My Certificate
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/landing" onClick={closeMobileNavbar}>
                <FiLogOut /> Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};

export default Team_A_HeaderV2;