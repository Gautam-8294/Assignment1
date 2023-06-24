import './App.css';
import Bottom from './components/Bottom';
import ClientCard from './components/ClientCard';
import Hero from './components/Hero';
import Image1 from './components/Image1';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Head">
      <Hero />
      {/* <Image1 /> */}
      </div>
      <div>
        <ClientCard />
      </div>
      <div>
        <ServiceCard />
      </div>
      <Bottom />
    </div>
  );
}

export default App;
