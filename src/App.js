import { Routes, Route } from "react-router-dom";
import Header from "./ui/headers/Header";
import RoutesAll from "./routes/RoutesAll";

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesAll />
    </div>
  );
}

export default App;
