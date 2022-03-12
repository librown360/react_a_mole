import './App.css';
import { useState } from 'react';
import MoleContainer from './MoleContainer';

function App() {
  // Scoring state
  let [score, setScore] = useState(0)

  // Generate Molehill
  const createMoleHill = () => {
      let hills = []
      for (let i = 0; i < 9; i++) {
        hills.push(
          <MoleContainer
          key={i}
          setScore={setScore}
          score={score} />
        )
      }
      return (
        <div>
          {hills}
        </div>
      )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
