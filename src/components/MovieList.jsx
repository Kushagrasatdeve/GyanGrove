import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './MovieCard';
import Img1 from '../assets/Rect1.svg';
import Img2 from '../assets/Rect2.svg';
import Img3 from '../assets/Rect3.svg';
import Img4 from '../assets/React4.svg';
import Img5 from '../assets/Rect5.svg';
import Img6 from '../assets/Rect6.svg';
import Img7 from '../assets/Rect7.svg';
import Img8 from '../assets/Rect8.svg';

const imageSource = [
  {
    "eventName": "Winter Wonderland Fair",
    "cityName": "West Douglas",
    "date": "2024-03-24T00:00:00.000Z",
    "weather": "Snowy 26C",
    "distanceKm": "4264.1226847222415",
    "imgUrl": Img1
  },
  {
    "eventName": "Spring Clouds Art Exhibit",
    "cityName": "North Amy",
    "date": "2024-03-25T00:00:00.000Z",
    "weather": "Cloudy 7C",
    "distanceKm": "3864.065400248832",
    "imgUrl": Img2
  },
  {
    "eventName": "Snowy Peaks Photography Workshop",
    "cityName": "Rayville",
    "date": "2024-03-26T00:00:00.000Z",
    "weather": "Snowy 18C",
    "distanceKm": "14188.240054906337",
    "imgUrl": Img3
  },
  {
    "eventName": "Sunny Days Marathon",
    "cityName": "Hartville",
    "date": "2024-03-27T00:00:00.000Z",
    "weather": "Sunny 2C",
    "distanceKm": "9022.823129623723",
    "imgUrl": Img4
  },
  {
    "eventName": "Tropical Tunes Music Festival",
    "cityName": "South Andrew",
    "date": "2024-03-27T00:00:00.000Z",
    "weather": "Cloudy 30C",
    "distanceKm": "14311.615540703924",
    "imgUrl": Img5
  },
  {
    "eventName": "Frozen Harmony Concert",
    "cityName": "Port Markton",
    "date": "2024-03-27T00:00:00.000Z",
    "weather": "Sunny -3C",
    "distanceKm": "12476.33705344043",
    "imgUrl": Img6
  },
  {
    "eventName": "Cloudy Skies Book Fair",
    "cityName": "Lake Matthew",
    "date": "2024-03-27T00:00:00.000Z",
    "weather": "Cloudy 14C",
    "distanceKm": "6515.755364660444",
    "imgUrl": Img7
  },
  {
    "eventName": "Sunlit Path Charity Run",
    "cityName": "West Erika",
    "date": "2024-03-27T00:00:00.000Z",
    "weather": "Sunny -4C",
    "distanceKm": "4544.261026003867",
    "imgUrl": Img8
  }
];

const PrevArrow = () => {
  return <div className='hidden'></div>;
};

const NextArrow = () => {
  return <div className='hidden'></div>;
};

const MovieList = () => {
  const [events] = useState(imageSource);

  const settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3, // Adjusted to scroll 3 slides at a time
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, // Adjusted to scroll 2 slides at a time
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 className="text-2xl text-white absolute top-0 left-0 ml-12 mt-4 z-10 mb-4">Recommended Shows</h2>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index}>
            <Card event={event} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
