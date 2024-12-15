import '../../components/Footer/Footer.scss';
import { Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Lottie from "lottie-web";
import dontworry from "../../../public/Footer/contact.json";

export default function Footer() {

    const beHappyAnimation = useRef(null);

    useEffect(() => {
        const dontworryAnimation = Lottie.loadAnimation({
            container: beHappyAnimation.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: dontworry,
        });

        return () => {
            dontworryAnimation.destroy();
        };
    }, []);

    return (<>
        <div id='footer' className="footer">
            <h1><span className="letter_color">C</span>ontact <span className="letter_color">U</span>S</h1>

            <div className='footer_container'>
                <div className='footer_flex_buttons'>
                    <div>
                        <Button className="Button_WA" variant="contained" startIcon={<WhatsAppIcon />}>
                            WhatsApp
                        </Button>
                    </div>
                    <div>
                        <Button className="Button_CU" variant="contained" startIcon={<CallIcon />}>
                            Call Us
                        </Button>
                    </div>
                    <div>
                        <Button className="Button_MU" variant="contained" startIcon={<MailIcon />}>
                            Mail Us
                        </Button>
                    </div>
                    <div>
                        <Button className="Button_BO" variant="contained" startIcon={<EventAvailableIcon />}>
                            Book Now
                        </Button>
                    </div>
                </div>
                <div className='footer_content'>
                    <div className='footer_logo_icon'>
                        <div><img className='logo_img' src='./logo_full.png'></img></div>
                        <div><p>"We empower you to rediscover the joy of communication through compassionate care and personalized solutions for hearing and speech."</p></div>
                        <div className='social_img'>
                            <div>
                                <FacebookIcon className='icon_style' />
                            </div>
                            <div>
                                <WhatsAppIcon className='icon_style' />
                            </div>
                            <div>
                                <InstagramIcon className='icon_style' />
                            </div>
                            <div>
                                <CallIcon className='icon_style' />
                            </div>
                        </div>
                    </div>
                    <div ref={beHappyAnimation} className="beHappyAnime"></div>
                    <div className='address_container'>
                        <div><img src='./public/Footer/location.png'/></div>
                        <div>
                            <div><h3>Address</h3></div>
                            <div><p># 54/15,<br/>Indra Gandhi Road,<br/> Alwarthirunagar,<br/> Chennai - 600 087</p></div>
                        </div>
                    </div>
                </div>
                <div className='copy_right'>
                    <p>Copyright © 2024 Bliss Tone - All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </>)
}