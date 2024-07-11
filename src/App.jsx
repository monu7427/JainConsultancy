import { Route, Routes } from 'react-router-dom';
import './App.css';
import InfoBar from './Components/InfoBar';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Articals from './Components/Articals';
import Footer from './Components/Footer';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Publication from './Pages/Publication';
import Services from './Pages/Services';
import TermsCondition from './Pages/TermsCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';



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
             
            </>
          }
        />
        <Route path="/about" element={<About/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
        <Route path="/publication" element={<Publication/>} /> 
        <Route path="/services" element={<Services/>} /> 
        <Route path="/terms-condition" element={<TermsCondition/>} /> 
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;

