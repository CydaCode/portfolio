
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
// import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
   <>
   <Nav />
    <Header />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
   </>
  );
}

export default App;
 
