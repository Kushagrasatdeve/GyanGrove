import React from 'react';
import MovieList from './MovieList';
import backgroundImage from '../assets/Banner.svg';
import UpcomingEvents from './UpcomingEvents';

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Discover Exciting Events Happening Near You - Stay Tuned for Updated!</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptas doloribus, perspiciatis iusto qui ad cum quam ex hic maiores consequuntur saepe, nam dolorem, sapiente magnam? Eos harum aut ea.
          </p>
        </div>
        <div className="absolute top-1/2 bottom-0 left-0 w-full p-8 mt-60">
          <MovieList />
          <div className="mt-8">
          <UpcomingEvents />
        </div>
        </div>
      </div>
      <div className="mt-8">
        
      </div>
    </>
  );
};

export default Home;
