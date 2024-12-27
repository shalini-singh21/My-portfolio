import React from "react";
// import { Link } from "react-scroll";
const Navbar = () => {


    return (


        <>
            <div className="Navbar">

                <h1 className="introName2">Shalini singh</h1>

                < div className="desktop-menu">
                    <a activeClass="active" href="/Home" spy={true} smooth={true} offset={-100} duration={500} className="items">Home </a>
                    <a activeClass="active" href="/skills" spy={true} smooth={true} offset={-50} duration={500} className="items">Skills</a>
                    <a activeClass="active" href="/projects" spy={true} smooth={true} offset={-50} duration={500} className="items">Projects</a>
                </div>

            </div>
        </>
    )
}

export default Navbar;