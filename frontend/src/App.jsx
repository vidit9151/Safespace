import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Error from "./pages/Error";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?? "bumblebee"
  );
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <BrowserRouter>
      <div data-theme={theme} className=" flex flex-col">
        <div>
          <Navbar setTheme={setTheme} />
          <Breadcrumbs />
        </div>
        <div className="min-h-fit ">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
