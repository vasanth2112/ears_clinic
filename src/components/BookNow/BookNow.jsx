import { BookForm } from "./BookForm";
import "./BookNow.scss";

export const BookNow = () => {
  return (
    <div id="booknow" className="bookNow">
      <h1>
        <span className="letter_color">B</span>ook{" "}
        <span className="letter_color">N</span>ow{" "}
      </h1>
      <div className="bookNow-container">
        <BookForm />
      </div>
    </div>
  );
};
