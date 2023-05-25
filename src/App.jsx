import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetailsPg from "./pages/CountryDetailsPg";
import Layout from "./component/Layout";
import useLocalStorage from "use-local-storage";

const App = () => {
  // hooks
  const [isLightMode, setIsLightMode] = useLocalStorage("theme", true);

  useEffect(() => {
    const body = document.body.classList;
    !isLightMode ? body.add("dark--mode") : body.remove("dark--mode");
  }, [isLightMode]);

  // functions
  const toggleTheme = () => setIsLightMode(!isLightMode);
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <Layout isLightMode={isLightMode} toggleTheme={toggleTheme} />
          }
        >
          <Route index element={<Home />} />
          <Route path="details/:countryName" element={<CountryDetailsPg />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
