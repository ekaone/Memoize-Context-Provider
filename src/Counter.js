import React from "react";

import { useSharedState } from "./store";

const Counter = () => {
  const [state, setState] = useSharedState();
  const increment = () => {
    setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div>
      {state.count} <button onClick={increment}>+1</button>
    </div>
  );
};

export default Counter;
