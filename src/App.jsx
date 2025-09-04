import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./Pages/RoomDetails";

const App = () => {
  const isOwner = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwner && <Navbar></Navbar>}
      <div className=" min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/rooms" element={<AllRooms></AllRooms>} />
          <Route path="/room/:id" element={<RoomDetails></RoomDetails>} />
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default App;
