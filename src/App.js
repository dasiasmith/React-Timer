import './App.css';
import CountdownTimer from './components/countdownTimer/countdownTimer';

function App() {
  return (
    <div className="App">
      <CountdownTimer
      countdownTimestampMs={1643673600000}/>
    </div>
  );
}

export default App;
