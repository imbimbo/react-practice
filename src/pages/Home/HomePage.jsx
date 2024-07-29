import React from 'react'
import Header from "../../components/Header/Header"
import "./HomePage.css"
import Timer from "../../components/Timer/Timer"
import { useState } from 'react'

const HomePage = () => {
  const [showTimer, setshowTimer] = useState(true)

  return (
    <>
    <Header/>
    <h1>Welcome</h1>
    {showTimer ? <Timer/> : null}
    <button onClick={() => {setshowTimer(!showTimer)}}>Show/Hide</button>
    </>
  )
}

export default HomePage
