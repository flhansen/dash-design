import React from 'react';
import './Clock.scss';

function Clock({ text, seconds = 0, minutes = 0, hours = 0, ...props }) {

  const pad = (num, size) => {
    let s = num + '';
    while (s.length < size) s = "0" + s;
    return s;
  };

  const timeToAngle = (time) => {
    return time / 30.0 * Math.PI;
  };

  const timeToCartesian = (radius, time) => {
    const angle = timeToAngle(time);
    const x = Math.cos(angle - Math.PI / 2) * radius;
    const y = Math.sin(angle - Math.PI / 2) * radius;
    return [x, y];
  };

  const createArc = (cx, cy, radius, time) => {
    const [startX, startY] = timeToCartesian(radius, 0);
    const [endX, endY] = timeToCartesian(radius, time);

    const largeArc = time <= 30 ? 0 : 1;

    const d = [
      'M', cx + startX, cy + startY,
      'A', radius, radius, 0, largeArc, 1, cx + endX, cy + endY
    ].join(' ');

    return d;
  };

  const strokeSeconds = 4;
  const strokeMinutes = 18;
  const radiusSeconds = 150;
  const radiusMinutes = 138;
  const colorSeconds = '#909EB1';
  const colorMinutes = '#5D8FD9';
  const colorLeader = '#fcfcfc';

  return (
    <div className="clock" {...props}>
      <div className="clock__hands">
        <svg viewBox="0 0 300 300">
          <circle
            cx={150}
            cy={150}
            r={radiusMinutes - strokeMinutes/2}
            fill='none'
            stroke={colorLeader}
            strokeWidth={strokeMinutes - 8} />

          <path
            className="hand"
            d={createArc(
              150,
              150,
              radiusSeconds - strokeSeconds/2,
              seconds
            )}
            strokeWidth={strokeSeconds}
            fill='none'
            stroke={colorSeconds}
            strokeLinecap='round' />

          <path
            className="hand"
            d={createArc(
              150,
              150,
              radiusMinutes - strokeMinutes/2,
              minutes
            )}
            strokeWidth={strokeMinutes}
            fill='none'
            stroke={colorMinutes}
            strokeLinecap='round' />
        </svg>
      </div>
      <div className="clock__time-display">
        <h1 className="time">{pad(hours, 2)}:{pad(minutes, 2)}</h1>

        { text ?
          <p>{text}</p>
        : null }
      </div>
    </div>
  );

}

export default Clock;
