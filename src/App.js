import { BrowserRouter as Router, Routes, Route, Navigate, Outlet} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu';
import Home from './pages/Home';
import About from "./pages/About";
import Projects from "./pages/Projects";

const PrivateRoute = () => {
  const auth = null;
  return auth ? <Outlet /> : <Navigate to="/HomeContainer" />;
}

function App() {

  return (
    <div className="main-container">
      <Router>
        <HamburgerMenu />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;