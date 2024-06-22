import Navvar from '../components/Navvar';
import Hero from '../components/Hero';
import TabSection from '../components/TabSection';
import LogoSlider from '../components/LogoSlider';
import CardOne from '../components/CardOne';
import Cta from '../components/Cta';
import CardTwo from '../components/CardTwo';
import MidSection from '../components/MidSection';
import CardSlider from '../components/CardSlider';
import Contact from '../components/Contact';
import FooterOne from '../components/FooterOne';
import FooterTwo from '../components/FooterTwo';
import { useScroll, useSpring, motion } from 'framer-motion';
import '../App.css';
const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <Navvar />
      <Hero />
      <TabSection />
      <LogoSlider />
      <CardOne />
      <Cta />
      <CardTwo />
      <MidSection />
      <CardSlider />
      <Contact />
      <FooterOne />
      <FooterTwo />
      <motion.div className='progress-bar' style={{ scaleX }} />
    </div>
  );
};

export default Home;
