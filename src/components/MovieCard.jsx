import React from 'react';

const MovieCard = ({ event }) => {
  // Check if event is defined before accessing its properties
  if (!event) {
    return null; // or handle the case when event is undefined
  }

  return (
    <div className="max-w-xs relative rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={event.imgUrl} alt={event.eventName} />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 text-white">
        <div className="font-bold text-xl mb-2">{event.eventName}</div>
        <p className="text-white-700 text-base">
          <strong>City:</strong> {event.cityName}
        </p>
        <p className="text-white-700 text-base">
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-white-700 text-base">
          <strong>Distance:</strong> {event.distanceKm} Km
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
