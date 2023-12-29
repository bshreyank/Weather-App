import './App.css'
import Cities from './components/Cities'
import Earth from './components/Earth'
import Footer from './components/Footer'
import Hero from './components/Hero'
import News from './components/News'

function App() {
  return (
    <div className="App">
      <Hero />
      <Cities />
      <Earth/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App
