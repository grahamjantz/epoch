import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  
  const [currentDate, setCurrentDate] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  // console.log(currentDate)

  // console.log('11000111000010101001100011000001000110000'.length)

  // console.log(Math.round(+new Date()/1000).toString(2).length)
  
  
  setTimeout(() => {
    const binTime = Math.floor(Date.now()/1000).toString(2)
    
    // console.log('Date.now():', Math.round(Date.now() / 1000).toString(2))
    // console.log('parseInt:', parseInt(binTime))
    // console.log('date:', Date(parseInt(binTime)))

    const time = Date(parseInt(binTime))
    setCurrentTime(time)

    setCurrentDate(binTime)
  },"1000")

  return (
    <div className='App w-[75vw] max-w-xl h-[75vh] flex flex-col items-center gap-4 font-mono'>
      <h1 className=' mb-4'>Epochalypse</h1>
      <p className='leading-none'>&nbsp; At <b>03:14:08 UTC on 19 January 2038</b> the signed 32-bit integer representing seconds from the Unix epoch (00:00:00 UTC on Jan 1, 1970) will rollover, potentially causing damage to systems relying on this number.</p>
    
      <hr />
      <p>0{currentDate.slice(0,7)} {currentDate.slice(8,15)} {currentDate.slice(16,24)} {currentDate.slice(24,31)}</p>
      <p>{new Date(currentTime).toLocaleString()}</p>
    </div>
  )
}

export default App
