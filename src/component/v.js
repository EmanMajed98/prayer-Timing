
import React,{useState,useEffect} from "react";
function CountdownTimer() {
  const initialTime = { hours: 1, minutes: 59, seconds:59 }; // Set an initial time
  const [timer, setTimer] = useState(initialTime)
  const [intervalId, setIntervalId] = useState(null);

  // Function to decrement the timer
  const decrementTimer = () => {
    if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
      // Timer has reached 0, you can add logic for what happens when it reaches 0
      clearInterval(intervalId);
    } else {
      let newHours = timer.hours;
      let newMinutes = timer.minutes;
      let newSeconds = timer.seconds;

      if (newSeconds === 0) {
        if (newMinutes === 0) {
          newHours -= 1;
          newMinutes = 59;
        } else {
          newMinutes -= 1;
        }
        newSeconds = 59;
      } else {
        newSeconds -= 1;
      }

      setTimer({
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
      });
    }
  };

  // Start the timer when the component mounts
  useEffect(() => {
    const id = setInterval(decrementTimer, 100);
    setIntervalId(id);

    // Clean up the interval when the component unmounts
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <p>
        Time Remaining: {timer.hours}:{timer.minutes}: {timer.seconds} 
      </p>
    </div>
  );
}

  export default CountdownTimer;
  