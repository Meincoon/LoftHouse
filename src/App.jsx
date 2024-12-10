import './assets/styles/hub.scss'
import Header from './components/Header'
import Benefits from './components/Benefits'
import Apartments from './components/Apartments'
import Cta from './components/Cta'
import Video from './components/Video'
import Map from './components/Map'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main>
        <Benefits />
        <Apartments />
        <Cta />
        <Video />
        <Map />
        <Feedback />
      </main>
      <Footer />
    </>
  )
}

export default App
