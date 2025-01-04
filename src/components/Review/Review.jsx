import { REVIEWS } from "../../ListConstant";
import "../Review/Review.scss";
import Marquee from "react-fast-marquee";

export default function Review() {
    return (<>
        <div className="review_container">
            <h1>
                <span className="letter_color">W</span>hat{" "}
                <span className="letter_color">O</span>ur{" "}
                <span className="letter_color">C</span>ustomers{" "}
                <span className="letter_color">A</span>re{" "}
                <span className="letter_color">S</span>aying
            </h1>
            <div className="review_flex">
                <Marquee pauseOnHover>
                    {REVIEWS.map((content, index) => (
                        <div className="review_cards">
                            <div className="google_icon">
                                <img src={content.image}></img>
                            </div>
                            <h3>{content.title}</h3>
                            <p>"{content.description}"</p>
                            <div src="star_style">
                                <img src="../Review/star.png" />
                                <img src="../Review/star.png" />
                                <img src="../Review/star.png" />
                                <img src="../Review/star.png" />
                                <img src="../Review/star.png" />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    </>)
}