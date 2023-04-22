import './App.css';
import Footer from './components/Footer';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <div className="main-container">
      <HamburgerMenu />
      <main className='hero'>
        <h1 className='hero-text'>I write code</h1> 
      </main>
      <Footer />
    </div>
  );
}

export default App;