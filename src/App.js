import './App.css';
import { Carousel } from './components/CarouselSection/Carousel';
import Intro from './components/Introduction/Intro';
import NavbarComp from './components/Navbar/NavbarComp';
import OtherServices from './components/Otherservices/OtherServices';
import Scroll from './components/ParallaxSection/Scroll';
import Stories from './components/StoriesSection/Stories';
import Testimonies from './components/TestimonySection/Testimonies';

function App() {
  return (
    <div className="App">

        <NavbarComp />
        <Carousel />
        <Intro />
        <Testimonies />
        <OtherServices />
        <Scroll />
        <Stories />

    </div>
  );
}

export default App;
  