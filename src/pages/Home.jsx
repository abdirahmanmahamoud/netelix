import Footer from "../components/Footer/Footer";
import HomeHero from "../components/HomeHero";
import Subscribe from "../components/Subscribe";
import Faqs from "../components/faqs/Faqs";
import Features from "../components/feature/features";

const Home = () => {
  return (
    <div className="relative">
      <HomeHero />
      <Features />
      <Faqs />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
