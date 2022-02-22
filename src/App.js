import './App.css';
// import components
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ScrollToTop from './components/scroll/ScrollToTop';
function App() {
  return (
    <div id='app'>
      <Navbar />
      <Hero />
      <ScrollToTop />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
