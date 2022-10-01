import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage";
import Testnavbar from './components/Navbar/Testnavbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/test" element={<Testnavbar/>}></Route>
    </Routes>
    <Footer/>   
  </Router>
    </>
  );
}

export default App;

