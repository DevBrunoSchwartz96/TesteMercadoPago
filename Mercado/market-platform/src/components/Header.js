import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && isVisible) {
        setIsVisible(false); 
      } else if (currentScrollY < lastScrollY && !isVisible) {
        setIsVisible(true); 
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, lastScrollY]); 

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <img src="./logoempresa.png" alt="logo-empresa" />
      </div>
    </header>
  );
};

export default Header;
