import { useEffect } from 'react'
import { useState } from 'react'
import Countdown from './Countdown'

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
      <h1 className=' mb-4 underline flex items-end'><img src="/clock-icon.webp" className='h-12 w-12'/> Epochalypse</h1>
      <p className='leading-none'>&nbsp; At <b>03:14:08 UTC on 19 January 2038</b> the signed 32-bit integer representing seconds from the Unix epoch, <b>(00:00:00 UTC on Jan 1, 1970)</b> will invert, becoming negative and potentially causing damage to systems relying on this number. Such as this one.</p>
    
      <hr className='w-full'/>
      <div className='flex h-8'>
        <details className='text-red-400 font-light inline text-right relative '>
          <summary className='relative underline'>
            0
          </summary>
          <p className='absolute w-96 text-left bg-red-100 p-4 rounded'>
            <b className='font-bold'>Sign bit.</b> When this bit reaches 1, the number will become negative, making the date <b>20:45:52 UTC on 13 December 1901.</b> ~68y prior to the Unix Epoch.

          </p>
        </details>
        {currentDate.slice(0,7)} &nbsp;
        {currentDate.slice(7,15)} &nbsp;
        {currentDate.slice(15,23)} &nbsp;
        {currentDate.slice(23,31)}
      </div>
      <p>{new Date(currentTime).toUTCString()}</p>
      <ul className='explanation flex w-full justify-between'>
        <li>
          <p>0{currentDate.slice(0,7)}</p>
          <div></div>
          <div className='text-left'>
            <p>2 147 483 648s</p>
            <p>35 791 394m</p>
            <p>596 523h</p>
            <p>24 855d</p>
            <p>68y</p>
          </div>
        </li>
        <li>
          <p>{currentDate.slice(7,15)}</p>
          <div></div>
          <div className='text-left'>
            <p>8 388 608s</p>
            <p>139 810m</p>
            <p>2 330h</p>
            <p>97d</p>
          </div>
        </li>
        <li>
          <p>{currentDate.slice(15,23)}</p>
          <div></div>
          <div className='text-left'>
            <p>32 768s</p>
            <p>546m</p>
            <p>9h</p>
          </div>
        </li>
        <li>
          <p>{currentDate.slice(23,31)}</p>
          <div></div>
          <div className='text-left'>
            <p>64 secs</p>
          </div>
        </li>
      </ul>
      <Countdown />
      {/* <div className='countdown'>
        <h2>Countdown</h2>
        {new Date('03:14:08 UTC on 19 January 2038').toISOString()}
      </div> */}
    </div>
  )
}

export default App
