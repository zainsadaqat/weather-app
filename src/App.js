import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const APP_ID = process.env.REACT_APP_ID;
  const CITY_NAME = city;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(URL);
    const { feels_like, humidity, temp_min, temp_max } = res.data.main;
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
}

export default App;
