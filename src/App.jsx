import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Countdown from "./sections/Countdown/Countdown";
import Gallery from "./sections/Gallery/Gallery";
import Hero from "./sections/Hero/Hero";
import HowToGet from "./sections/HowToGet/HowToGet";
import Invitation from "./sections/Invitation/Invitation";
import Location from "./sections/Location/Location";
import Schedule from "./sections/Schedule/Schedule";
import Social from "./sections/Social/Social";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Hero />
        <Invitation />
        <Countdown />
        <Schedule />
        <Location />
        <HowToGet />
        <Gallery />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;
