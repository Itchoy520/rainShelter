import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("Idle"); // State for connection status
  const [ledState, setLedState] = useState("OFF"); // LED state (ON/OFF)
  const [isOnDisabled, setIsOnDisabled] = useState(false); // Disable state for Turn ON button
  const [isOffDisabled, setIsOffDisabled] = useState(true); // Disable state for Turn OFF button

  const apiURL = "https://backendrainshelter.onrender.com"; // Ensure you are using the correct backend URL

  // Connect function (dummy implementation, you should replace it with actual logic)
  const connect = async () => {
    try {
      setStatus("Connecting...");
      // Example: Assuming you're connecting to a serial port or API
      // Replace the following line with your actual connect logic
      await fetch(`${apiURL}/connect`); // Replace with actual connection logic
      setStatus("Connected");
    } catch (error) {
      setStatus("Failed to connect");
      console.error("Connection error:", error);
    }
  };

  // Function to toggle LED ON
  const toggleLEDOn = async () => {
    try {
      const response = await fetch(`${apiURL}/onToggle`);
      const data = await response.json();
      if (data.value === 1) {
        setLedState("ON");
        setIsOnDisabled(true); // Disable Turn ON button
        setIsOffDisabled(false); // Enable Turn OFF button
      }
    } catch (error) {
      console.error("Error toggling LED ON:", error);
    }
  };

  // Function to toggle LED OFF
  const toggleLEDOff = async () => {
    try {
      const response = await fetch(`${apiURL}/offToggle`);
      const data = await response.json();
      if (data.value === 0) {
        setLedState("OFF");
        setIsOnDisabled(false); // Enable Turn ON button
        setIsOffDisabled(true); // Disable Turn OFF button
      }
    } catch (error) {
      console.error("Error toggling LED OFF:", error);
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-primary text-white justify-center p-4">
        <a className="text-4xl font-bold text-white hover:bg-gray-700 p-2">
          RainShelter
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center flex-grow bg-gray-800 p-6 space-y-6">
        <button onClick={connect} className="btn btn-outline btn-success text-xl px-6 py-3 mb-6">
          Connect
        </button>
        <p className="text-xl">{status}</p> {/* Display connection status */}

        <div className="divider divider-warning my-8"></div>

        {/* Card */}
        <div className="card bg-neutral text-neutral-content w-96 p-4 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl mb-4">LED Control</h2>
            <div className="card-actions justify-center gap-4">
              <button
                className="btn btn-outline btn-primary px-6 py-3"
                onClick={toggleLEDOn}
                disabled={isOnDisabled} // Disable button based on state
              >
                Turn ON
              </button>
              <button
                className="btn btn-outline btn-accent px-6 py-3"
                onClick={toggleLEDOff}
                disabled={isOffDisabled} // Disable button based on state
              >
                Turn OFF
              </button>
              <p>Current LED State: <strong>{ledState}</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center bg-primary text-primary-content p-10 mt-10">
        <aside className="text-center">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="inline-block fill-current mb-4"
          >
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p className="font-bold text-xl">
            RainShelter
            <br />
            Providing reliable service
          </p>
          <p className="mt-4 text-lg">Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
