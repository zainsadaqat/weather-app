import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './DisplayResult.css';
import BackArrow from '../../assets/BackArrow';
import { AppContext } from '../../store/store';
import FeelsLikeImage from '../../assets/FeelsLikeImage.png';
import HumidityImage from '../../assets/HumidityImage.png';
import { iconsList } from './IconsList';

const DisplayResult = () => {
  const { state } = useContext(AppContext);
  if (state.error) {
    return (
      <section className="location-page">
        <div className="card-max-width">
          <div className="location-card">
            <div className="flex">
              <span className="back-btn">
                <Link to="/">
                  <BackArrow />
                </Link>
              </span>
              <h2 className="form-heading">Weather App</h2>
            </div>
            <div className="hr"></div>
            <div className="flex justify-center">
              <h2 className="error-message">City not found!</h2>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="location-page">
        <div className="card-max-width">
          <div className="location-card">
            <div className="flex">
              <span className="back-btn">
                <Link to="/">
                  <BackArrow />
                </Link>
              </span>
              <h2 className="form-heading">Weather App</h2>
            </div>
            <div className="hr"></div>
            <div className="flex justify-center direction-column">
              <div className="my-4">
                <img
                  src={iconsList[state?.result?.data?.weather[0].description]}
                  alt="according to the temperature"
                  width={100}
                  height={100}
                />
              </div>
              <div className="my-4">
                <h2 className="temp">
                  {parseInt(state?.result?.data?.main?.temp - 273.15) ||
                    'Temperature'}
                  °C
                </h2>
              </div>
              <div>
                <h3 className="temp-desc">
                  {state?.result?.data?.weather[0].description ||
                    'Temperature description...'}
                </h3>
              </div>
              <div className="my-4">
                <h3 className="temp-city">
                  {state?.result?.data?.name || 'City'},{' '}
                  {state?.result?.data?.sys?.country || 'Country'}
                </h3>
              </div>
            </div>
            <div className="hr"></div>
            <div className="footer">
              <div className="left-box">
                <div>
                  <img
                    src={FeelsLikeImage}
                    alt="feels like icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="left-align">
                  <p className="feels-like">
                    {parseInt(state?.result?.data?.main?.feels_like - 273.15)}°C
                  </p>
                  <p>Feels like</p>
                </div>
              </div>
              <div className="right-box">
                <div>
                  <img
                    src={HumidityImage}
                    alt="humidity"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="right-align">
                  <p className="humidity">
                    {state?.result?.data?.main?.humidity}%
                  </p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default DisplayResult;
