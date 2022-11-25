import React, { useState, useEffect } from "react";

const Timer = ({playable, round, setPlayable, time, setTime}) => {

  
  
  useEffect(() => {
    if (playable === true) {
        if (time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        } else {
            setTime('Time Up!');
            setPlayable(false);
        }
    }
   
  });

  return (
    <div style={count}>
      <div style={timeDiv}>Time Left: {time}</div>
      <div>Round {round}</div>
    </div>
  );
};

const count = {
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.3rem",
};

const timeDiv = {
  paddingBottom: '0.8rem'
}

export default Timer;
