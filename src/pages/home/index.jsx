import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import Slider from "../../components/slider";
import About from "../../components/about";
import HowItWorks from "../../components/howitworks";
import Services from "../../components/services";
import Contact from "../../components/contact";
import Testimonials from "../../components/testimonials";
import Subscriptions from "../../components/subscriptions";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <NavBar />
      {/* Slider */}
      <Slider />
      {/* About Section */}
      <About />
      {/* How it works */}
      <HowItWorks />
      {/* Services */}
      <Services />
      {/* Contact */}
      <Contact />
      {/* Testimonials */}
      <Testimonials />
      {/* Subscriptions */}
      <Subscriptions />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
