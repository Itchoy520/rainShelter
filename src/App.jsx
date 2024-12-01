import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState("Idle"); // State for connection status
  const [port, setPort] = useState(null); // State to store selected serial port

  const connect = async () => {
    try {
      setStatus("Connecting...");
      
      // Request user to select a serial port
      const selectedPort = await navigator.serial.requestPort();
      await selectedPort.open({ baudRate: 9600 }); // Open port with a baud rate
      setPort(selectedPort); // Save the port for future use
      
      // Wait for a few seconds to check connection
      const reader = selectedPort.readable.getReader();
      const decoder = new TextDecoder();

      // Check if ESP32 sends a response (e.g., handshake message)
      let isConnected = false;
      const timer = setTimeout(() => {
        reader.cancel(); // Stop reading after 10 seconds
      }, 10000);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break; // End of stream

        const response = decoder.decode(value);
        console.log(response); // Debug log from ESP32
        if (response.includes("ESP32_OK")) {
          isConnected = true; // Example handshake message from ESP32
          break;
        }
      }

      clearTimeout(timer);
      reader.releaseLock();

      setStatus(isConnected ? "Connected" : "Not Connected");
    } catch (error) {
      console.error(error);
      setStatus("Not Connected");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-gray-800 text-white justify-center">
        <a className="text-3xl font-bold text-white hover:bg-gray-700 p-2">
          RainShelter
        </a>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <button onClick={connect} className="btn btn-outline btn-success mb-4">
          Connect
        </button>
        <p className="text-lg mb-6">{status}</p> {/* Display connection status */}

        <div className="divider divider-warning"></div>

        {/* Card */}
        <div className="card bg-neutral text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cookies!</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-outline btn-primary">Primary</button>
              <button className="btn btn-outline btn-accent">Accent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
