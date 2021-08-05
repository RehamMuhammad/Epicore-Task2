
import './App.css';
import Main from './components/Main';
import Features from './components/Features';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Features/>
      <Partners/>
      <Contact/>
    </div>
  );
}

export default App;
