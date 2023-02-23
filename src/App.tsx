import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './component/Header'
import MainProfileBox from './component/MainProfileBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <MainProfileBox/>
    
    </>
  )
}

export default App
