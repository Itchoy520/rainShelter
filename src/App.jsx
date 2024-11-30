import React from "react";

function App() {
  const connect = () => {
    // Connection logic
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <div className="navbar bg-gray-800 text-white">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost text-white hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white hover:bg-gray-700">
            RainShelter
          </a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost text-white hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <button className="btn btn-outline btn-success">Success</button>
      </div>
    </div>
  );
}

export default App;