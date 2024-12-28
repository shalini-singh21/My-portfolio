import React from "react";
import shalu from "../Image/shalu.jpg"

const Intro = () => {

    return (

        <>
            
               
                <section id="intro">
                    <div className="introContent">
                        <span className="hello"> Hello,</span> <br></br>
                        <span className="introText"> I'm<span className="introName"> Shalini singh</span> <br></br>Web Developer</span>
                        <p className="introParagh">  Developed proficiency in <strong> Frontend Development</strong> by implementing solutions in <strong>ReactJS, Java,SQL</strong> .
                         to enhance user experiences. <br></br> Targeting roles as a <strong> Frontend Development.</strong>  </p>
                        {/* <a><button className="btn"><img src="" alt="" />Hire me</button></a> */}
                    </div>
                <img src={shalu} alt="shalu" className="shalu"/>
                 
                </section>

              
            
        </>
    )
}
export default Intro;