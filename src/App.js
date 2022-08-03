import logo from "./logo.svg";
import "./App.css";
import Hero from "./componants/Hero/Hero";
import Btc from "./componants/Btc/Btc";
import How from "./componants/How/How";
import Trade from "./componants/Trade/Trade";
import Contactus from "./componants/Contactus/Contactus";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Btc></Btc>
      <How></How>
      <Trade></Trade>
      <Contactus />
    </div>
  );
}

export default App;
