import React from 'react';

const EventCard = ({ event }) => {
    if (!event) {
        return null; // or handle the case when event is undefined
    }

    return (
        <div className="relative max-w-xl rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={event.imgUrl} alt={event.eventName} />
            <div className="p-4">
                <div className="font-bold text-xl mb-2">{event.eventName}</div>
                <p className="text-gray-700 text-base">
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 text-base">
                    <strong>City:</strong> {event.cityName}
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Distance:</strong> {event.distanceKm} Km
                </p>
                <div className="bg-white mt-2 p-2 rounded-lg">
                    <p className="text-sm text-gray-500">
                        <strong>Weather:</strong> {event.weather}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
