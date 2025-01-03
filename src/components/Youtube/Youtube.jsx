import YouTube from "react-youtube";
import './Youtube.scss';

const options = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 1,
  },
};

const YoutubeVideo = () => {
  return (
    <div className="youtube-container">
      <YouTube
      className="yt-video"
        videoId="0vf1q_HgLpw"
        options={options}
        onReady={(event) => {
          event.target.pauseVideo();
        }}
        id="video"
      />
    </div>
  );
};

export default YoutubeVideo;
