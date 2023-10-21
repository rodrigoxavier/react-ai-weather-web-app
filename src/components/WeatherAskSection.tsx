import { useState } from 'react'
import './WeatherAskSection.css'

function WeatherAskSection() {
  const [inputLocation, setInputLocation] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(inputLocation);
  };

  return (
    <div className='ask-square'>
      <h1>Current Weather</h1>
      <form className="locationform" onSubmit={handleSubmit}>
        <div className="locationform__elements">
          <label htmlFor="location">Enter location:</label>
          <input
            id="location"
            type="text"
            value={inputLocation}
            onChange={(e) => setInputLocation(e.target.value)}
            placeholder="Insert here the city wich you want to see weather"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default WeatherAskSection
