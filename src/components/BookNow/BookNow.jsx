import { BookForm } from "./BookForm";
import "./BookNow.scss";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import booknow from "../../../public/Header/booknow.json";

export const BookNow = () => {
  const bookNowAnimation = useRef(null);

  useEffect(() => {
    const bookAnimation = Lottie.loadAnimation({
      container: bookNowAnimation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: booknow,
    });

    return () => {
      bookAnimation.destroy();
    };
  }, []);

  return (
    <div id="booknow" className="bookNow">
      <h1>
        <span className="letter_color">B</span>ook{" "}
        <span className="letter_color">N</span>ow{" "}
      </h1>
      <div className="bookNow-container">
          <div ref={bookNowAnimation} className="bookNowAnime"></div>
        <BookForm />
      </div>
    </div>
  );
};
