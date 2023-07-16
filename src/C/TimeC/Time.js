import React from "react";
import "./Time.Style/Time.css";
export default function Time() {
  const [time, setTime] = React.useState();

  function getDate() {
    const date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    if (seconds < 10) {
      seconds = 0 + seconds.toString();
    }
    if (minutes < 10) {
      minutes = 0 + minutes.toString();
    }
    if (hours < 10) {
      hours = 0 + hours.toString();
    }

    const newDate = hours + ":" + minutes + ":" + seconds;
    setTime(newDate);
  }
  setTimeout(getDate, 1000);

  return (
    <>
      <div className="main-time">{time}</div>
    </>
  );
}
