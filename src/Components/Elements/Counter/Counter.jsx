import React, { useEffect, useState } from "react";

//styling

const Count = (props) => {
  // label of counter
  // number to increment to
  // duration of count in seconds

  const number = props.data;

  // number displayed by component
  const [count, setCount] = useState(0);

  let m = 0;

  useEffect(() => {
    let start = 0;
    // first three numbers from props

    let end = number;
    // if zero, return
    if (start === end) return;

    if (end >= 1000 && end < 1000000) {
      end = end / 1000;
    }

    if (end >= 1000000) {
      end = end / 1000000;
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
  }, [number, 2]);

  let cnt = () => {
    if (number >= 1000 && number < 1000000) {
      return `${count}K`;
    } else if (number >= 1000000) {
      return `${number / 1000000}M`;
    } else {
      return `${count}`;
    }
  };

  return (
    <h1>
      <i>{cnt()}+</i>
    </h1>
  );
};

export default Count;
