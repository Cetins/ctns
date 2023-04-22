import './App.css';
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <div className="main-container">
      <HamburgerMenu />
      <h1 className='hero-text'>I write code</h1> 
      <Footer />
    </div>
  );
}

export default App;