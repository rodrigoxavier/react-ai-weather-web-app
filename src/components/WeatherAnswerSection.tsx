import { useState } from 'react'
import './WeatherAnswerSection.css'

function WeatherAnswerSection() {
  const [cityName, setCityName] = useState('-,-')
  const [temperatureValue, setTemperatureValue] = useState('-')
  const [temperatureUnit, setTemperatureUnit] = useState('°C')

  return (
    <div className='ask-square'>
      <h3>{cityName}</h3>
      <h2>{temperatureValue}{temperatureUnit}</h2>
    </div>
  )
}

export default WeatherAnswerSection
