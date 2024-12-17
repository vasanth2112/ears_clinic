import './App.css'
import Header from './components/Header/Header.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Service from './components/Services/Service.jsx'
import Brand from './components/Brand/Brand.jsx'
import Footer from './components/Footer/Footer.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import { BookNow } from './components/BookNow/BookNow.jsx'

function App() {

  return (
    <>
      <Header />
      <AboutUs />
      <Service />
      <Brand />
      <Gallery />
      <BookNow />
      <Footer />
    </>
  )
}

export default App
