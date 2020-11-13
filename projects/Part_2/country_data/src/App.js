import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const showCountries = () => {
    const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    if (countriesToShow.length > 10) {
      return (
        <div>
          Too many matches. Be more specific
        </div>
      )
    } else if (countriesToShow.length === 1){
      return (
        <div>
          {countriesToShow.map((country, i) => {
            return (
              <div key={i}>
                <h1 key={i}>{country.name}</h1>
                <div>capital {country.capital}</div>
                <div>population {country.population}</div>
                <h3>languages</h3>
                <div>
                  <ul>
                    {country.languages.map((language, i) => <li key={i}>{language.name}</li>)}
                  </ul>
                </div>
                <div>
                  <img src={country.flag} alt="#country-flag" width="250"/>
                </div>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div>
          {countriesToShow.map((country, i) => <div key={i}>{country.name}</div>)}
        </div>
      )
    }
  }

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
      {showCountries()}
    </div>
  )
}



export default App;
