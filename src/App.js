import "./App.css";
import { useState } from "react";
import Home from "./component/Home";
import { Link, Routes, Route } from "react-router-dom";
import Country from "./component/Country";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => setOpen(!open);

  return (
    <div className="App w-full h-screen overflow-hidden relative">
      <header className="h-12 bg-cyan-900 p-2.5 flex justify-between items-center relative">
        <i
          className="fa-solid fa-bars menu-icon text-xl py-2.5 px-4 cursor-pointer hover:text-white"
          onClick={handleOpenMenu}
        ></i>

        <div
          className={
            open
              ? "menu visible opacity-100 transition-all duration-200 ease-linear absolute h-screen top-0 left-0 w-60 bg-cyan-900 p-2.5 translate-x-0"
              : "menu invisible opacity-0 transition-all duration-200 ease-linear absolute h-screen top-0 left-0 w-60 bg-cyan-900 p-2.5 -translate-x-full"
          }
        >
          <div className="close-menu mb-10 text-white">
            <i
              className="fa-solid fa-x text-2xl cursor-pointer hover:opacity-60"
              onClick={handleOpenMenu}
            ></i>
          </div>

          <Link
            to="/home"
            className="home flex items-center text-white p-2 cursor-pointer hover:bg-gray-600"
          >
            <i className="fa-sharp fa-solid fa-house"></i>
            <p className="ml-4 text-xl">Home</p>
          </Link>
          <Link
            to="/countries"
            className="contries flex items-center text-white p-2 cursor-pointer hover:bg-gray-600"
          >
            <i className="fa-solid fa-globe"></i>
            <p className="ml-4 text-xl">Countries</p>
          </Link>
        </div>
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/countries" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
