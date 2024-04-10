
import Navbar from './components/Navbar';
import Carsoule from './components/Carsoule';
import Poster from './components/poster';
import Services from './components/services';
import Testimonial from './components/testimonial';
import Footer from './components/Footer';
import Card from './components/Card'
import './App.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <Carsoule/>
      <Poster/>
      <Services/>
      <Card/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
