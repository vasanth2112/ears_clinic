import YouTube from "react-youtube";
import "./Youtube.scss";
import Slider from "react-slick";

const options = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 1,
  },
};

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  cssEase: "linear",

  fade: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 100, transform: "translateX(50px)" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, zIndex: 100, transform: "translateX(-50px)" }}
      onClick={onClick}
    />
  );
}

const YoutubeVideo = () => {
  return (
    <div className="youtube-container">
      <Slider {...settings}>
        <YouTube
          className="yt-video"
          videoId="0vf1q_HgLpw"
          options={options}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
          id="video"
        />
        <YouTube
          className="yt-video"
          videoId="AxzVyMcmRcs"
          options={options}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
          id="video"
        />
        <YouTube
          className="yt-video"
          videoId="acYMy9b0F2A"
          options={options}
          onReady={(event) => {
            event.target.pauseVideo();
          }}
          id="video"
        />
      </Slider>
    </div>
  );
};

export default YoutubeVideo;
