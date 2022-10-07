import "./styles/App.css";

import Home from "./sections/home/Home";
import Gallery from "./sections/gallery/Gallery";
import Booking from "./sections/booking/Booking";
import Contact from "./sections/contact/Contact";

function App() {
  return (
    <div id="app">
      <Home />
      <Gallery />
      <Booking />
      <Contact />
      <footer>&#169; 2022 DannyBoiTattoos</footer>
    </div>
  );
}

export default App;
