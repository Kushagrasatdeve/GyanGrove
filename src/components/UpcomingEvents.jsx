import React, { useState } from 'react';
import EventCard from './EventCard';
import Img1 from '../assets/E1.svg'
import Img2 from '../assets/E2.svg'
import Img3 from '../assets/E3.svg'
import Img4 from '../assets/E4.svg'
import Img5 from '../assets/E5.svg'
import Img6 from '../assets/E6.svg'
import Img7 from '../assets/E7.svg'
import Img8 from '../assets/E8.svg'
import Img9 from '../assets/E9.svg'

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
  },
  {
    "eventName": "Winter Bliss Ice Sculpture Contest",
    "cityName": "Terrenceberg",
    "date": "2024-03-27T00:00:00.000Z",
    "weather": "Snowy 25C",
    "distanceKm": "6350.197144394632",
    "imgUrl": Img9
  },
  {
    "eventName": "Winter Baking Contest",
    "cityName": "Terrenceberg",
    "date": "2024-03-27T00:00:00.000Z",
    "weather": "Snowy 22C",
    "distanceKm": "63",
    "imgUrl": Img4
  }
];

const UpcomingEvents = () => {
  const [events] = useState(imageSource);

  return (
    <>
    <h2 className="text-2xl text-black font-bold ml-12">Upcoming Events</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
      {events.map((event, index) => (
        <EventCard
          key={index}
          event={event}
        />
      ))}
    </div>
    </>
  );
};

export default UpcomingEvents;
