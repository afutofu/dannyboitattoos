import "./styles/App.css";

import Home from "./sections/home/Home";
import Gallery from "./sections/gallery/Gallery";
import Booking from "./sections/booking/Booking";

function App() {
  return (
    <div id="app">
      <Home />
      <Gallery />
      <Booking />
    </div>
  );
}

export default App;
