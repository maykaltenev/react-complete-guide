import React, { useCallback, useState } from 'react';
import Button from "./components/UI/Button/Button"
import './App.css';
import DemoOutput from './Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      // This will ensure that react will always
      // use the latest state (not looking on the last time state was rendered,
      //  but the state the scheduled state), because React is postponing rendering and preoretasing state update
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle])
  const allowToggleHandler = () => {
    setAllowToggle(true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
    </div>
  );
}

export default App;
