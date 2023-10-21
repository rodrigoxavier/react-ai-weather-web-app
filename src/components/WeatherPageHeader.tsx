import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './WeatherPageHeader.css'

function WeatherPageHeader() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default WeatherPageHeader
