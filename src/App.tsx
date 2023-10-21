import { useState } from 'react'
import './App.css'
import WeatherPageHeader from './components/WeatherPageHeader'
import WeatherAskSection from './components/WeatherAskSection'
import WeatherAnswerSection from './components/WeatherAnswerSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherPageHeader/>
      <div className='main-content'>
        <WeatherAskSection></WeatherAskSection>
        <WeatherAnswerSection></WeatherAnswerSection>
      </div>
    </>
  )
}

export default App
