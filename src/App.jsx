import { Route, Routes } from 'react-router-dom';
import './App.css';
import InfoBar from './Components/InfoBar';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Articals from './Components/Articals';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <InfoBar />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Articals />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<div>About Us Page</div>} /> {/* Replace with your About component */}
      </Routes>
    </>
  );
}

export default App;

