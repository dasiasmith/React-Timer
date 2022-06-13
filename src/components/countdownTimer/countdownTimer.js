import {useState, useEffect} from 'react';
import './countdownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    // Callback to run updateRemainingTime function every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId) // Stops interval
    }, [countdownTimestampMs]) // Whenever countdownTimestampMs changes this effect will be repeated again
    
    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }
    return(
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span className='two-numbers'>{remainingTime.hours}</span>
            <span>hours</span>
            <span className='two-numbers'>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span className='two-numbers'>seconds</span>
        </div>
    );
}

export default CountdownTimer;
