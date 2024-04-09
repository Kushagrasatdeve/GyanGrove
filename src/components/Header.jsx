import React from 'react';

function Header() {
  return (
    <div className="p-4 bg-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-auto">
          <h1 className="text-2xl font-bold text-[#1E2022]">BookUsNow</h1>
          <div className="hidden md:flex items-center text-gray-500">
            Mumbai, India
          </div>
        </div>
        <div className="flex flex-grow justify-center mt-4 md:mt-0">
          <div className="flex items-center space-x-4">
            <select
              className="px-4 py-2 border border-gray-300 rounded "
            >
              <option value="">All Categories</option>
              <option value="live_shows">Live Shows</option>
              <option value="streams">Streams</option>
              <option value="movies">Movies</option>
              <option value="plays">Plays</option>
              <option value="events">Events</option>
              <option value="sports">Sports</option>
              <option value="activities">Activities</option>
              <option value="favorites">Favorites</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded mt-4 md:mt-0">Sign In</button>
      </div>
      <div className="flex md:flex-grow justify-center mt-4">
        <nav className="md:flex md:space-x-4">
          <a href="/home" className="px-4 py-2 hover:bg-gray-300">Live shows</a>
          <a href="/home" className="px-4 py-2 hover:bg-gray-300">Streams</a>
          <a href="/home" className="px-4 py-2 hover:bg-gray-300">Movies</a>
          <a href="/home" className="px-4 py-2 hover:bg-gray-300">Plays</a>
          <a href="/home" className="px-4 py-2 hover:bg-gray-300">Events</a>
          <a href="/home" className="px-4 py-2 hover:bg-gray-300">Sports</a>
          <a href="/home" className="px-4 py-2 hover:bg-gray-300">Activities</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
