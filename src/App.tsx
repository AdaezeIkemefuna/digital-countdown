import { useState } from "react";
import CountDownTimer from "./components/CountDownTimer";

function App() {
  const [deadline, setDeadline] = useState("2023-5-31");
  const NOW_IN_MS = new Date().getTime();

  //Subtract current date from due date
  const DIFFERENCE = new Date(deadline).getTime() - new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + DIFFERENCE;
  return (
    <div>
      <h1>Countdown To Launch</h1>
      <CountDownTimer targetDate={dateTimeAfterThreeDays} />
      {/* will be displayed after being properly styled */}
      <div style={{ display: "none" }}>
        <input type="date" onChange={(e) => setDeadline(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
