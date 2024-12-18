import './App.css'
import Header from './components/Header/Header.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Service from './components/Services/Service.jsx'
import Brand from './components/Brand/Brand.jsx'
import Footer from './components/Footer/Footer.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import { BookNow } from './components/BookNow/BookNow.jsx'
import { useState, useEffect, useRef } from "react";
import Tooltip from '@mui/material/Tooltip';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {

  const [showButton, setShowButton] = useState(false);
  const headerRef = useRef(null); // Reference to HeaderContainer

  // Scroll event listener to toggle the button visibility based on HeaderContainer height
  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the HeaderContainer
      const headerHeight = headerRef.current?.offsetHeight || 0;

      // Show the button only after scrolling past the HeaderContainer
      if (window.pageYOffset > headerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call the handler once to ensure correct initial state
    handleScroll();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Add ref to HeaderContainer */}
      <div ref={headerRef}>
        <Header />
      </div>
      <AboutUs />
      <Service />
      <Brand />
      <Gallery />
      <BookNow />
      <Footer />

      {/* Scroll to Top Button */}
      {showButton && (

        <div className='scroll-to-top'>

          <div className='arrow_flex'>
          <a href="https://api.whatsapp.com/send?phone=919047770020">
            <WhatsAppIcon className='buttons'
              style={{
                color: '#25D366',
                fontSize: '5vw',  // Responsive size based on viewport width
                maxWidth: '35px', // Optional: Limit maximum size
                maxHeight: '35px', // Optional: Limit maximum height
              }}
            />
            </a>
            <InstagramIcon className='buttons'
              style={{
                color: '#E4405F',
                fontSize: '6vw',  // Responsive size based on viewport width
                maxWidth: '35px', // Optional: Limit maximum size
                maxHeight: '35px', // Optional: Limit maximum height
              }}
            />
            <Tooltip title="Back to Top" placement="top">
              <ArrowUpwardIcon
                onClick={scrollToTop}
                className='buttons'
                style={{
                  fontSize: '6vw',  // Responsive size based on viewport width
                  maxWidth: '35px', // Optional: Limit maximum size
                  maxHeight: '35px', // Optional: Limit maximum height
                }}
              />
            </Tooltip>
          </div>
        </div>
      )}
    </>
  )
}

export default App
