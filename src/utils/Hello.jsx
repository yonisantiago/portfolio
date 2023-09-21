import React, { useState, useEffect } from 'react';
import 'animate.css';
import './Hello.css'; // Import CSS file for animations
  
  const NameChanger = () => {
    const names = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Hallo', 'Oi'];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentName, setCurrentName] = useState(names[currentIndex]);
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
        setFadeIn(false);
      }, 1000);
  
      return () => {
        clearTimeout(timeout);
      };
    }, [currentIndex, names.length]);
  
    useEffect(() => {
      setCurrentName(names[currentIndex]);
      setFadeIn(true);
    }, [currentIndex, names]);
  
    return (
      <div className="name-changer">
        <span className={`name ${fadeIn ? 'fade-in' : ''}`}>{currentName}</span>
      </div>
    );
  };
  
  
  export default NameChanger;
  