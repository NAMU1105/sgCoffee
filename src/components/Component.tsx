import React, { ReactElement } from "react";

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

function Counter({
  count,
  onDecrease,
  onIncrease,
}: CounterProps): ReactElement {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={onIncrease}>증가</button>
      <h3>{count}</h3>
      <button onClick={onDecrease}>감소</button>
    </div>
  );
}

export default Counter;
