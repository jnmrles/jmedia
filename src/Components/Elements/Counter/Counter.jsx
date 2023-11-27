import React, { useEffect, useState } from "react";

//styling

const Count = (props) => {
  // label of counter
  // number to increment to
  // duration of count in seconds

  console.log("props", props);
  const number = props.data;

  // number displayed by component
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = number;
    // if zero, return
    if (start === end) return;

    if (end > 1000) {
      start = end * 0.08;
    }

    // find duration per increment
    let totalMilSecDur = 2;
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [number, 3]);

  return (
    <h1>
      <i>{count} + </i>
    </h1>
  );
};

export default Count;
