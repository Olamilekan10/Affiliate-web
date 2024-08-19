import './App.css';
import { Carousel } from './components/CarouselSection/Carousel';
import Footer from './components/Footer/Footer';
import Intro from './components/Introduction/Intro';
import NavbarComp from './components/Navbar/NavbarComp';
import NewsBlogs from './components/News&Blogs/NewsBlogs';
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
        <NewsBlogs />
        <Footer />

    </div>
  );
}

export default App;
  