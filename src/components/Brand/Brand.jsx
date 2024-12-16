import "../../components/Brand/Brand.scss";
import { BRAND_IMAGES } from "../../ListConstant";
import Marquee from "react-fast-marquee";

export default function Brand() {
  return (
    <>
      <div id='brands' className="brand_container">
        <h1>
          <span className="letter_color">T</span>rusted{" "}
          <span className="letter_color">B</span>rands{" "}
          <span className="letter_color">W</span>e{" "}
          <span className="letter_color">P</span>artner{" "}
          <span className="letter_color">W</span>ith
        </h1>
        <div className="brand">
          <Marquee>
            {BRAND_IMAGES.map((content, index) => (
              <div key={index} className="brand_img">
                <img src={content.img} alt={`Brand ${index}`} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}
