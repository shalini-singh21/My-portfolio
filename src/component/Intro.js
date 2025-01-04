import React from "react";
import shalu from "../Image/shalu.jpg"
// import mama from "../Image/mama.png"

const Intro = () => {

    return (

        <>


            <section id="intro">
                <div className="introContent">
                    <span className="hello"> Hii,</span> <br></br>
                    <span className="introText"> I'm<strong className="introName"> Shalini singh</strong> <br></br>Web Developer</span>
                    <p className="introParagh">  Developed proficiency in <strong> Frontend Development</strong> by implementing solutions in <strong>ReactJS, Java,SQL</strong> .
                        <br></br>to enhance user experiences. <br></br> Targeting roles as a <strong> Frontend Development.</strong>  </p>
                
                    <a className="contactBtn" href=" mailto:shalu.singh1304@gmail.com"  >contact me</a>
                </div>
                <img src={shalu} alt="shalu" className="shalu" />

            </section>


          



        </>
    )
}
export default Intro;