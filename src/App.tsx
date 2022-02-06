import React from "react";
import { Header } from "./components/Header";
import { Editor } from "./components/Editor";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Editor />
    </div>
  );
};

export default App;
