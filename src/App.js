import './App.css';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Features from './Components/Features/Features';
import Imagecard from './Components/Imagecard/Imagecard';
import Location from './Components/Location/Location';
import Information from './Components/Information/Information';
import Footer from './Components/Footer/Footer';
import Bdsadmission from './Components/Bdsadmission/Bdsadmission';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Features></Features>
      <Imagecard></Imagecard>
      <Bdsadmission></Bdsadmission>
      <Location></Location>
      <Information></Information>
      <Footer></Footer>
    </div>
  );
}

export default App;