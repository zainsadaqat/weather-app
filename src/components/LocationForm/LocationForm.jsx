import React, { useContext, useState } from 'react';
import './LocationForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../store/store';

const LocationForm = () => {
  const [cityName, setCityName] = useState('');
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const APP_ID = process.env.REACT_APP_ID;
  const CITY_NAME = cityName;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(URL);
      dispatch({ type: 'RESULT', payload: res });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err });
      console.log('Error while getting the results: ', err);
    }
    navigate('/result');
  };
  return (
    <section className="location-page">
      <div className="card-max-width">
        <div className="location-card">
          <h2 className="form-heading">Weather App</h2>
          <div className="hr"></div>
          <form onSubmit={handleSubmit} className="form-space">
            <input
              type="text"
              className="input"
              placeholder="Enter city name"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <p className="or">or</p>
            <button className="btn">Get Device Location</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LocationForm;
