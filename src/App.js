import logo from "./logo.svg";
import "./App.css";
import Hero from "./componants/Hero/Hero";
import Btc from "./componants/Btc/Btc";
import How from "./componants/How/How";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Btc></Btc>
      <How></How>
    </div>
  );
}

export default App;
