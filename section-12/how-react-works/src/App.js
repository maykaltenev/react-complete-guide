import React, { useState } from 'react';
import Button from "./components/UI/Button/Button"
import './App.css';
import DemoOutput from './Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(true)
  const toggleParagraph = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <DemoOutput show={false} />
      <Button onClick={toggleParagraph}>Show Paragraph</Button>
    </div>
  );
}

export default App;
