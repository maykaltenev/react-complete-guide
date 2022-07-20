import React, { useState } from "react";
import "./App.css";
// import Button from "./components/UI/Button/Button.jsx";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagraphHandle = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is now!</p>}
      <Button onClick={toggleParagraphHandle}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
