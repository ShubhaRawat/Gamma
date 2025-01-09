import React from "react";
import "./Header.css";
import {
  MdHome,
  MdShare,
  MdPalette,
  MdMoreVert,
  MdArrowDropDown,
} from "react-icons/md";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="left-section">
          <MdHome className="home-icon" />
          <span className="breadcrumb-separator">/</span>
          <span className="title">Untitled</span>
        </div>
        <div className="right-section">
          <button className="action-button">
            <MdPalette className="icon-left" /> Theme
          </button>
          <button className="action-button">
            <MdShare className="icon-left" /> Share
          </button>
          <button className="present-button">
            Present <MdArrowDropDown className="dropdown-icon" />
          </button>
          <div className="menu-button">
            <MdMoreVert />
          </div>
          <div className="profile">
            <div className="profile-circle">
              <span className="profile-initial">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
