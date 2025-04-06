import Hero from '../components/home/Hero';
import About from '../components/home/About';
import RestaurantsListing from '../components/shared/RestaurantsListing';
import Footer from '../components/layout/Footer';
import ResturantInfo from '../components/home/ResturantInfo';


const Home = () => {
  return (
    <div className="w-full bg-black">
      <Hero />
      <RestaurantsListing id="restaurants-section" />
      <About />
      <ResturantInfo/>
      <Footer/>
    </div>
  );
};

export default Home;