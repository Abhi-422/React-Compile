import React, { useState, useEffect } from "react";
import logo from "/weather.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState("");
  const [city, setCity] = useState("");
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (city) => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeather("Mumbai");
  }, []);

  if (!weatherData) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  const { data } = weatherData;
  const { temp, rh, wind_spd } = data[0];

  return (
    <div className="mt-16 flex justify-center items-center">
      <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 text-white rounded-2xl shadow-xl p-8 w-[400px]">
        {/* Logo */}
        <img
          src={logo}
          className="m-auto w-32 animate-spin"
          style={{ animationDuration: "12s" }}
          alt="logo"
        />

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mt-4">Weather App</h2>

        {/* Input */}
        <div className="flex items-center bg-white rounded-full mt-6 p-2 shadow-md">
          <input
            className="flex-1 px-4 py-2 rounded-l-full outline-none text-black"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold"
            onClick={() => fetchWeather(city)}
          >
            🔍
          </button>
        </div>

        {/* Weather Info */}
        {weatherData && (
          <div className="mt-8 text-center space-y-2">
            <h3 className="text-2xl font-semibold">
              {data[0].city_name}, {data[0].country_code}
            </h3>
            <p className="text-5xl font-bold">{temp}°C</p>
            <p className="text-lg italic">{data[0].weather.description}</p>
            <div className="flex justify-around mt-4 text-sm">
              <p>💧 Humidity: {rh}%</p>
              <p>💨 Wind: {wind_spd} m/s</p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-center">
          <a
            className="text-sm underline hover:text-gray-200"
            href="https://portfolio-abhishek-422.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made by Abhishek
          </a>
        </div>
      </div>
    </div>
  );
};

export default Weather;
