
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Roadmap from './components/Roadmap/Rodmap'
import Footer from './components/Footer/Footer'
import Ca from './components/CA/CA'
import About from './components/About/About'
import Tokenomics from './components/Tokenomics/Tokenomics';

function App() {
  return (
    <div style={{position:"relative", overflow:"hidden"}}>
      <Navbar/>
      <Home/>
      <About/>
      <Roadmap/>
      <Tokenomics />
      <Ca/>
      <Footer/>
    </div>
  )
}

export default App
