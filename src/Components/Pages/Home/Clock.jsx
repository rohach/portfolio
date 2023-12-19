import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <div>My local time:</div>
      <p>{formattedTime}</p>
    </div>
  );
}

export default Clock;
