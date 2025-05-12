import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: 'images/slide_1.jpg',
      title: 'You Can Help Save Lives!',
      subtitle: 'we know urgent need and how you can help',
    },
    {
      image: 'images/slide_2.jpg',
      title: 'Help Children',
      subtitle: 'Transform the lives of children close to your home or close to your heart.',
    },
    {
      image: 'images/slide_3.jpg',
      title: 'We do a Lot to Make',
      subtitle: 'All the Children of the World Happy',
    },
  ];

  return (
    <div className="slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div className="container text-center">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
