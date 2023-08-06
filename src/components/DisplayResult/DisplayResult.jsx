import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './DisplayResult.css';
import BackArrow from '../../assets/BackArrow';
import { AppContext } from '../../store/store';

const DisplayResult = () => {
  const { state } = useContext(AppContext);
  console.log('State: ', state.result.data.weather[0].description);
  console.log('State Error: ', state.error);

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
              {/* img */}
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
            <div className="flex justify-center">
              {/* img */}
              <h2 className="temp">
                {parseInt(state?.result?.data?.main?.temp - 273.15) ||
                  'Temperature'}
                °C
              </h2>
              <h3 className="temp-desc">
                {state?.result?.data?.weather[0].description ||
                  'Temperature description...'}
              </h3>
              <h3 className="temp-city">
                {state?.result?.data?.name || 'City name...'}
              </h3>
            </div>
            <div className="hr"></div>
            <div className="footer">
              <div className="left-box">
                <div>
                  <image src="" alt="feels like icon" />
                </div>
                <div className="left-align">
                  <p className="co-temp">
                    {parseInt(state?.result?.data?.main?.feels_like - 273.15)}°C
                  </p>
                  <p>Feels like</p>
                </div>
              </div>
              <div className="righ-box">
                <div>
                  <image src="" alt="humidity" />
                </div>
                <div className="left-align">
                  <p className="co-temp">
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
