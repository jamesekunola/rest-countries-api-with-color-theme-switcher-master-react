import { useState, useEffect, useCallback, memo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { useFetch } from "../component/useFetch";
import { Link } from "react-router-dom";
import CountryCard from "../component/CountryCard";
import PreLoader from "../component/PreLoader";
import Error from "../component/Error";

const continents = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const Home = memo(({ isLoading, isError, countryData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setData(countryData);
    }
  }, [countryData]);

  // functions
  // func to filter country by region based on selected region.
  const displaySelectedRegion = (region) => {
    if (region === "All") {
      setData(countryData);
    } else {
      // set data back to default  before filtering.
      setData(countryData);

      // filter region based on user selected region
      setData((prevData) => prevData.filter((reg) => reg.region === region));
    }
  };

  // func to update search result immediately a search input is been entered
  const searchCountries = (e) => {
    const inputValue = e.target.value;

    // make inputValue first letter uppercase();
    const inp1 = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setSearchInput(inp1);

    // revert back to initial data when a text is been entered
    setData(countryData);

    // update ui with searched result
    setData((prevData) =>
      prevData.filter((country) => country.name.startsWith(inp1))
    );
  };

  // func to handle form submits
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput("");
  };

  if (isLoading) {
    return <PreLoader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <main>
      <div className="hero__container">
        {/* hero left */}

        <div className="hero__header">
          <div className="hero__left">
            <div className="hero__search_box">
              <form onSubmit={handleSubmit}>
                <AiOutlineSearch />
                <input
                  type="text"
                  placeholder="Search for a country..."
                  value={searchInput}
                  onChange={searchCountries}
                />
              </form>
            </div>
          </div>

          {/* hero right */}
          <div className="hero__right">
            <div className="region__title">
              <p>Filter by Region</p>
              <FiChevronDown />
            </div>

            {/* dropdown box */}
            <div className="hero__region__dropdown">
              {continents.map((continent, index) => (
                <button
                  key={index}
                  onClick={() => displaySelectedRegion(continent)}
                >
                  {continent}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="hero__cardContainer">
          {data?.map((info) => (
            <div className="card" key={info.alpha3Code}>
              <Link to={`/details/${info.name}`}>
                <CountryCard {...info} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
});

export default Home;
