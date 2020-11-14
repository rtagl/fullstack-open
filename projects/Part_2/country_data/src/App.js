import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryView = ({ country }) => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        const tempInFahrenheit = 1.8 * (response.data.main.temp - 273) + 32;
        setTemperature(tempInFahrenheit);
      });
  });

  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>languages</h3>
      <div>
        <ul>
          {country.languages.map((language, i) => (
            <li key={i}>{language.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={country.flag} alt="#country-flag" width="250" />
      </div>
      <div>
        <p>
          the temperature in {country.capital} is {Math.round(temperature)}°F
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [oneCountry, setOneCountry] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleShowCountry = (country) => {
    setOneCountry(country);
  };

  const showCountryDetails = () => {
    return (
      <div>
        <button onClick={handleGoBack}>go back</button>
        <CountryView country={oneCountry} />
      </div>
    );
  };

  const handleGoBack = () => {
    setOneCountry(null);
  };

  const showCountries = () => {
    const countriesToShow = countries.filter((country) =>
      country.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (countriesToShow.length > 10) {
      return <div>Too many matches. Be more specific</div>;
    } else if (countriesToShow.length === 1) {
      return <CountryView country={countriesToShow[0]} />;
    } else if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
      return (
        <div>
          {countriesToShow.map((country, i) => {
            return (
              <div key={i}>
                {country.name}
                <button onClick={() => handleShowCountry(country)}>show</button>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>no results match your search</div>;
    }
  };

  return (
    <div>
      <div>
        <label>find countries </label>
        <input
          value={filter}
          onChange={handleFilterChange}
          placeholder="search"
        />
      </div>
      {oneCountry === null ? showCountries() : showCountryDetails()}
    </div>
  );
};

export default App;
