import './Nav.css';
import React, { useState } from 'react';

const demoData = {
    name: "Bhautik",
    version: "Free"
};

function Nav() {
  const [selectedFunctionality, setSelectedFunctionality] = useState(null);

  const handleFunctionalityClick = (name) => {
    setSelectedFunctionality(name);
  };

  return (
    <div className='nav-container'>
      {/* Profile Section */}
      <div className='profile-container'>
        <div className='profile-icon'>
            {demoData.name.charAt(0)}
        </div>
        <div className='user-details'>
            <h1 className='user-name'>{demoData.name}'s Workspace</h1>
            <p className='version'>{demoData.version}</p>
        </div>
      </div>

      {/* Search Section */}
      <div className='search-container'>
        <img src='https://icon-library.com/images/search-icon-png-transparent/search-icon-png-transparent-18.jpg' className='search-icon' alt='Search'/>
        <input 
            type='text'
            placeholder='Jump to'
            className='search-input'
        />
        <p className='shortcut'>Ctrl+K</p>
      </div>

      {/* Other Functionalities Section */}
      <div className='other-functionalities-container'>
        {[
          { name: 'Gammas', src: 'https://static.vecteezy.com/system/resources/previews/015/689/211/original/shopping-history-icon-outline-style-vector.jpg' },
          { name: 'Shared with you', src: 'https://tse2.mm.bing.net/th?id=OIP.8E-V9QNg9gwFX1xm_NFbeQHaHa&pid=Api&P=0&h=180' },
          { name: 'Sites', src: 'https://tse4.mm.bing.net/th?id=OIP.TngkmpJ-SpaOnegeGtdedQHaHa&pid=Api&P=0&h=180' },
          { name: 'Ai Images', src: 'https://static.vecteezy.com/system/resources/previews/012/174/344/original/simple-stars-sparkle-icon-png.png' }
        ].map(({ name, src }) => (
          <div
            key={name}
            className={`functionality ${selectedFunctionality === name ? 'selected' : ''}`}
            onClick={() => handleFunctionalityClick(name)}
          >
            <img 
              src={src}
              alt={name}
              className='function-image' 
            />
            <p className='function-name'>{name}</p>
          </div>
        ))}
      </div>

      {/* Folder Section */}
      <div className='folder-container'>
        <p className='folders'>Folders</p>
        <div className='create-icon-container'>
            <button className='create-folder'>
                +
            </button>
        </div>
      </div>

      {/* Empty Folder Section */}
      <div className='isempty-folder'>
        <p className='isempty-folder-text'>
          Organize your gammas by topic and share them with your team <span>Create or Join a folder</span>
        </p>
      </div>

      {/* Additional Functionalities Section */}
      <div className='other-functionalities-container another'>
        {[
          { name: 'Templates', src: 'https://www.vhv.rs/dpng/d/2-27723_lightning-bolt-icon-png-transparent-png.png' },
          { name: 'Inspiration', src: 'https://tse1.mm.bing.net/th?id=OIP.4eoJGyAJ-Y8pnZjgbgWyPAHaF7&pid=Api&P=0&h=180' },
          { name: 'Themes', src: 'https://tse3.mm.bing.net/th?id=OIP.956JAfyFAPUD5pMXHIp-CQHaHa&pid=Api&P=0&h=180' },
          { name: 'Custom fonts', src: 'https://cdn4.iconfinder.com/data/icons/devine_icons/Black/PNG/File%20Types/Font.png' },
          { name: 'Trash', src: 'https://tse2.mm.bing.net/th?id=OIP.YYZ0wNRDxZ7RT2Hg1x0lhgHaHk&pid=Api&P=0&h=180' }
        ].map(({ name, src }) => (
          <div
            key={name}
            className={`functionality ${selectedFunctionality === name ? 'selected' : ''}`}
            onClick={() => handleFunctionalityClick(name)}
          >
            <img 
              src={src}
              alt={name}
              className='function-image' 
            />
            <p className='function-name'>{name}</p>
          </div>
        ))}
      </div>
      <div className='other-functionalities-container another'>
        {[
          { name: 'Setting & members', src: 'https://www.kindpng.com/picc/m/81-811253_gear-icon-png-transparent-png.png' },
          { name: 'Contact & support', src: 'https://tse2.mm.bing.net/th?id=OIP.tM62VLg1k5ekrhV5qJ8b6wHaD4&pid=Api&P=0&h=180' },
          { name: 'Share & feedback', src: 'https://www.svgrepo.com/show/450252/paper-plane.svg' }
        ].map(({ name, src }) => (
          <div
            key={name}
            className={`functionality ${selectedFunctionality === name ? 'selected' : ''}`}
            onClick={() => handleFunctionalityClick(name)}
          >
            <img 
              src={src}
              alt={name}
              className='function-image' 
            />
            <p className='function-name'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;
