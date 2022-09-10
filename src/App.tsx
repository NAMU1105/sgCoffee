import { useState } from "react";
import "./App.css";

import { Test } from "./assets/styles/test";

function App() {
  const [count, setCount] = useState(0);

  return <Test className="App">메렁</Test>;
}

export default App;
