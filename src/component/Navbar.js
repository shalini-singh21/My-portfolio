import React from "react";
// import { Link } from "react-scroll";
// import girl from "../Image/girl.png"
const Navbar = () => {


    return (


        <>
            <nav className="Navbar">
         
                <h1 className="introName2">Portfolio</h1>
                <div className="menu"> 
                    < ol className="desktop-menu">
                        <li>
                            <a activeClass="active" href="/Home" spy={true} smooth={true} offset={-100} duration={500} className="items">Home </a>

                        </li>
                        <li>
                            <a activeClass="active" href="/skills" spy={true} smooth={true} offset={-50} duration={500} className="items">Skills</a>
                        </li>


                        <li>
                            <a activeClass="active" href="/projects" spy={true} smooth={true} offset={-50} duration={500} className="items">Projects</a>
                        </li>
                        {/* <img src={girl} className=" items" /> */}
                       

                    </ol>
                  
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar;