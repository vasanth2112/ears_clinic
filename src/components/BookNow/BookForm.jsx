import { Button, TextField } from "@mui/material";
import { useState } from "react";
import './BookNow.scss';

export const BookForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="form">
        <div className="form_container">
          <div className="message_header">
            <p>Book Appointment</p>
          </div>
          <form>
            <div className="textfield_div">
              <div>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  label="Mail ID"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  //  id="outlined-multiline-static"
                  label="Phone No"
                  name="message"
                  multiline
                  //  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Button fullWidth className="Button" variant="contained">
                  BOOK
                </Button>
              </div>
              {/* <div>{successMessage && <p>{successMessage}</p>}</div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
