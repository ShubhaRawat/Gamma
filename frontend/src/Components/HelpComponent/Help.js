import React, { useState, useEffect, useRef } from 'react';
import './Help.css'; // Import the CSS file

const HelpMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => { 
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setDropdownOpen(false); 
        } 
    }; 

  useEffect(() => { 
    if (dropdownOpen) { 
        document.addEventListener('mousedown', handleClickOutside); 
    } else { 
        document.removeEventListener('mousedown', handleClickOutside); 
    } 
    
    return () => { 
        document.removeEventListener('mousedown', handleClickOutside); 
    }; }, [dropdownOpen]);

  return (
    <div className='help-menu-container'>
      <button className='icon-button' onClick={toggleDropdown}>
        ?
      </button>
      {dropdownOpen && (
        <div className='dropdown-menu'>
          <div className='menu-section'>
            <button className='dropdown-button' onClick={toggleDropdown}>
              <span className='menu-icon'>⌨️</span> Keyboard shortcuts
            </button>
            <button className='dropdown-button' onClick={toggleDropdown}>
              <span className='menu-icon'>🗺️</span> Take the editor tour
            </button>
            <button className='dropdown-button' onClick={toggleDropdown}>
              <span className='menu-icon'>☄️</span> What's new in Gamma
            </button>
          </div>
          <div className='menu-section'>
            <button className='dropdown-button' onClick={toggleDropdown}>
              <span className='menu-icon'>🔍</span> Help center
            </button>
            <button className='dropdown-button' onClick={toggleDropdown}>
              <span className='menu-icon'>💬</span> Contact support
            </button>
            <button className='dropdown-button' onClick={toggleDropdown}>
              <span className='menu-icon'>📩</span> Share feedback
            </button>
          </div>
          <div className='menu-section'>
            <button className='dropdown-button' onClick={toggleDropdown}>
              <span className='menu-icon'>🌐</span> English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpMenu;
