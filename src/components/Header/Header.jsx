import "../Header/Header.scss";
import { useState, useRef, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import background_video from "../../assets/video/hearing.mp4";
import loader from "../../../public/loader.json";
import Lottie from "lottie-web";

export default function Header() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const loaderAnimation = useRef(null);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    useEffect(() => {
        const loading = Lottie.loadAnimation({
            container: loaderAnimation.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: loader,
        });

        return () => {
            loading.destroy();
        };
    }, []);
    return (
        <>
            <div className="header">
                {!isVideoLoaded && (
                    <div ref={loaderAnimation} className="loader"></div> // Replace with your loader design
                )}
                {isVideoLoaded && (
                    <div className="navbar">
                        <div className="nav-bar">
                            <a href="#home">Home</a>
                            <a href="#about">About Us</a>
                            <a href="#service">Our Services</a>
                            <a href="#brands">Brands</a>
                            <a href="#gallery">Gallery</a>
                            <a href="#contact">Contact Us</a>
                        </div>
                    </div>
                )}
                <div className="header_titles">
                    <div className="header_titles_flex">
                        <div>
                            <img className="logo_img" src="./logo.png"></img>
                        </div>
                        <div className="hidden">
                            <img className="text_img" src="./Header/title.png"></img>
                        </div>
                    </div>
                    <div className="header_titles_btn">
                        <div>
                            <p>{`"Rediscover the joy of sound and speech. At Bliss Tone, we bring clarity to your communication. Experience expert care tailored to your unique needs."`}</p>
                        </div>
                        <div className="header_titles_flex_buttons">
                            <div>
                                <a href="#contact">
                                    <Button className="Button" variant="contained">
                                        Contact US
                                    </Button>
                                </a>
                            </div>
                            <div>
                                <a href="#aboutUs">
                                    <Button className="Button_outline" variant="outlined">
                                        Know More
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="booknow" className="header_video">
                    <video
                        autoPlay
                        loop
                        muted
                        className="video"
                        onCanPlayThrough={handleVideoLoad} // Try to use this event to trigger video load
                        onLoadedData={handleVideoLoad}
                    >
                        <source src={background_video} type="video/mp4" />
                    </video>
                    <div className="form">
                        <div className="form_container">
                            <div className="message_header">
                                <p>Book Oppointment</p>
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
                </div>
            </div>
        </>
    );
}
