import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'better-react-carousel';
import './Gallery.css';

const Gallery = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="gallery-container">
      <Carousel cols={2} rows={1} loop>
        <Carousel.Item>
          <img src='https://i.pinimg.com/736x/42/57/74/425774f7602fb65cd57596d51a560dd5.jpg' height="250px" width="400px" />
        </Carousel.Item>

        <Carousel.Item>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaCPHZvXA8tqyRHDSn5E1ZuxW-h5ocCJcMQ&s' height="250px" width="400px" />
        </Carousel.Item>

        <Carousel.Item>
          <img src='https://i.pinimg.com/564x/de/37/78/de3778f38067852c584a20c5e1606cc5.jpg' height="250px" width="400px" />
        </Carousel.Item>

        <Carousel.Item>
          <img src='https://i.pinimg.com/originals/ef/3a/ba/ef3abaf7aa7025652eb95317677871bb.jpg' height="250px" width="400px" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Gallery;
