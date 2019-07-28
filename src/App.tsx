import React from "react";
import "./App.css";
import Greeter from "./components/Greeter";

const App: React.FC = () => {
  return (
    <div>
      <h1>My First TypeScript React App</h1>
      <Greeter name="Alfred" currentTime={Date.now()} />
    </div>
  );
};

export default App;
