import "./App.css";

import { SharedStateProvider } from "./store";
import Counter from "./Counter";
import TextBox from "./TextBox";

const App = () => (
  <SharedStateProvider>
    <div className="App">
      <Counter />
      <TextBox />
    </div>
  </SharedStateProvider>
);

export default App;
