import logo from "./logo.svg";
import "./App.css";
import Hero from "./componants/Hero/Hero";
import Btc from "./componants/Btc/Btc";
import How from "./componants/How/How";
import Trade from "./componants/Trade/Trade";
import Contactus from "./componants/Contactus/Contactus";
import Footer from "./componants/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Btc></Btc>
      <How></How>
      <Trade></Trade>
      <Contactus />

      <Footer></Footer>
    </div>
  );
}

export default App;
