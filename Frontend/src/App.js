import { React } from "react";
import "./App.css"; // Correct import for image
import { Outlet } from "react-router-dom";

import bgImage from "./assets/images/bg1.jpg";

function App() {
  return (
    <>
      <main
        className="text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          margin: 0, 
          padding: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minheight: "100vh",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}

export default App;
