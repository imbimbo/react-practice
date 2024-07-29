import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
  const [time, setTime] = useState(10)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time -1)
    }, 1000);
    return function() {
      clearInterval(interval)
    }
  })

  return (
    <div>{time}</div>
  )
}

export default Timer
