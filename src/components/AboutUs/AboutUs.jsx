import "../AboutUs/AboutUs.scss";

export default function AboutUs() {
  return (
    <>
      <div id="about" className="aboutus">
        <h1>
          <span className="letter_color">A</span>bout
          <span className="letter_color"> U</span>s
        </h1>
        <div className="aboutus_container">
          <div className="aboutus_container_flex">
            <div className="video_container">
              <video autoPlay loop muted className="video">
                <source src="./AboutUs/video/aboutus.mp4" type="video/mp4" />
              </video>
              {/* <img src='./AboutUs/clinic_image.jpg' /> */}
            </div>
            <div className="who_we_are">
              <h2>Welcome to Bliss Tone Hearing and Speech</h2>
              <h3>{`"Empowering Communication. Enhancing Lives"`}</h3>
              <p>
                At{" "}
                <span className="highlight">
                  {" "}
                  BLISS TONE Speech and Hearing Clinic
                </span>
                , we are dedicated to helping individuals overcome hearing and
                speech challenges. With a commitment to personalized care,
                advanced technology, and trusted solutions, we aim to improve
                the quality of life for every client.
              </p>
              <h2>Who WE are</h2>
              <p>
                Bliss Tone Hearing and Speech is dedicated to improving lives by
                addressing hearing and speech challenges. Our expert team
                provides personalized care, advanced diagnostics, and tailored
                solutions in a welcoming environment. Partnering with top brands
                like{" "}
                <span className="highlight">Signia, Phonak, and Oticon</span>,
                we deliver trusted, cutting-edge technology to empower
                communication and enhance well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
