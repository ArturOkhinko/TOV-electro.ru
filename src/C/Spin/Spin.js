import React from "react";
import "./Spin.Style/Spin.css";
export default function Spin({ time, message }) {
  const [isCircle, setIsCircle] = React.useState(true);

  setTimeout(() => setIsCircle(false), time);
  return (
    <>
      {isCircle ? (
        <div className="main-circle">
          <div className="circle"></div>
          <div className="circle-small"></div>
        </div>
      ) : (
        <div className="message-catalog">{message}</div>
      )}
    </>
  );
}
