import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetailsPg from "./pages/CountryDetailsPg";
import Layout from "./component/Layout";
import useLocalStorage from "use-local-storage";

const App = () => {
  // hooks
  const [isLightMode, setIsLightMode] = useLocalStorage("theme", true);

  // functions
  const toggleTheme = () => setIsLightMode(!isLightMode);
  return (
    <div className="container">
      <Routes>
        <Route
          element={
            <Layout isLightMode={isLightMode} toggleTheme={toggleTheme} />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<CountryDetailsPg />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
