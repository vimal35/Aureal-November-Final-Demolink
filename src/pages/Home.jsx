import "./Home.css";
import HomeHero from "../components/HomeHero";
import Emerycontact from "../components/emerycontact";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
// import Programs from "../components/programs";
import Slider from "../components/slider";
import Why from "../components/Why";
import MainServices from "../components/mainservices";
import Partner from "../components/partner";
import Team from "../components/Team";
import Care from "../components/Care";




function Home() {
  return (
    <section >      
      <HomeHero />

      <Partner />
      <MainServices />
      <Why />
      <Slider />
      {/* <Programs /> */}
        <Team />
        <Care />
      <Testimonials />
      <FAQ />
      <Emerycontact />
      
      
    </section>
  );
}

export default Home;