import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [response, setResponse] = useState(null);
  const [value, setValue] = useState("0"); 
  const [isOn, setIsOn] = useState(false); 

  const apiURL = "https://backendrainshelter.onrender.com"; // Ensure you are using the correct backend URL



  const handlePostRequest = async () => {
    try {
      const postData = {
        newValue: value,
      };

      const result = await axios.post("https://backendrainshelter.onrender.com/change-value", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setResponse(result.data);
      if(value=="0"){
        setValue("1");
        setIsOn(true);
      }else{
        setValue("0");
        setIsOn(false);
      }
    } catch (error) {
      console.error("Error making POST request:", error);
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
      <div className="flex justify-center pt-10 font-bold">Status: </div>
      <div className="flex justify-center p-10">
        
        <div className="card bg-neutral text-neutral-content w-96 p-4 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="flex">
              <h2 className="card-title text-2xl mb-4 mr-5">Manual Control</h2>
              <div className="card-actions justify-center gap-4">
              <button onClick={handlePostRequest}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: isOn ? "red" : "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              >{isOn ? "OFF" : "ON"}</button>
              </div>
            </div>
            
          
        </div>
      </div></div>

      
        {/* Card */}
      

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
