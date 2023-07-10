import React, { useEffect, useState } from 'react';
import '../styling/Header.css'

const Header = () => {
  const [headerImage, setHeaderImage] = useState('');

  useEffect(() => {
    const fetchHeaderImage = async () => {
      try {
        const response = await fetch('http://localhost:5555/header');
        const data = await response.json();
        const image = data[0].img;
        setHeaderImage(image);
      } catch (error) {
        console.error('Error fetching header image:', error);
      }
    };

    fetchHeaderImage();
  }, []);

  return (
    <div className='container' style={{ backgroundImage: `url(${headerImage})` }}>
      <div className='headerContainer'>
        <h1>Pinus Bar</h1>
        <p>Melhor Hamburguer do sul</p>
        <a>
          <button>PEÇA AGORA!!</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
