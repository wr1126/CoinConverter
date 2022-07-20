import { useState } from "react";

function MinutesToHours() {
  const [time, setTime] = useState(0);
  const [mToh, setMtoH] = useState(false); //minutes to hours

  function onChange(e) {
    setTime(e.target.value);
  }
  function reset() {
    setTime(0);
  }
  function onFlip() {
    reset();
    setMtoH((current) => !current);
  }

  return (
    <>
      <h3>{mToh ? "Hours to Minutes" : "Minutes to Hours"}</h3>
      <div>
        <label htmlFor="minutes">Minutes </label>
        <input
          value={mToh ? time * 60 : time}
          onChange={onChange}
          id="minutes"
          placeholder="minutes"
          type="number"
          disabled={mToh ? true : false}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours </label>
        <input
          value={mToh ? time : time / 60}
          onChange={onChange}
          id="hours"
          placeholder="hours"
          type="number"
          disabled={mToh ? false : true}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>
        {mToh ? "Minutes to Hours" : "Hours to Minutes"}
      </button>
    </>
  );
}
function KmToMiles() {
  return (
    <>
      <h3>Km to Miles</h3>
    </>
  );
}

function App() {
  const [index, setIndex] = useState("-1");

  function onSelect(e) {
    setIndex(e.target.value);
  }
  return (
    <>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="-1">select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </>
  );
}

export default App;
