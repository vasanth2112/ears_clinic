import '../Header/Header.scss';
import { useState, useRef, useEffect } from "react";
import background_video from "../../assets/video/hearing.mp4";

export default function Header() {
    return (<>
        <div className='header'>
        <div className="navbar">
              <div className="nav-bar">
                <a href="#home" style={{ color: "#ffffff99" }}>Home</a>
                <a href="#aboutUs" style={{ color: "#ffffff99" }}>About Us</a>
                <a href="#ourTeam" style={{ color: "#ffffff99" }}>Our Team</a>
                <a href="#service">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#contact">Contact</a>
              </div>
              </div>
            <div className='header_flex'>
                <div className='header_titles'>
                    <div className='header_titles_flex'>
                    <div><img className='logo_img' src='./logo.png'></img></div>
                    <div className='hidden'> <img className='text_img' src='./Header/title.png'></img></div>
                    </div>
                </div>
                <div className='header_video'>
                    <video autoPlay loop muted className='video'>
                        <source src={background_video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </>);
}