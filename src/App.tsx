import { useState } from "react";
import "./App.css";
import { Div } from "./assets/styles/style";
import Counter from "./components/Component";

function App() {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <Div className="App">
      <Counter count={count} onDecrease={onDecrease} onIncrease={onIncrease} />
    </Div>
  );
}

export default App;
