import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Countdown = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('2038-01-19T03:14:08Z');
    
    const updateCountdown = () => {
      const currentDate = new Date();
      const difference = targetDate - currentDate;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setCountdown('Countdown expired');
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-full countdown flex justify-center items-end'>
        {countdown === '' ? (
            <div className='w-full'>
                <LinearProgress />
            </div>
        ) : (
            <p className='text-xl font-bold'>
                Time remaining: <b className='text-xl text-red-400 font-bold '>{countdown}</b>
            </p>
        )}
    </div>
  );
};

export default Countdown;
