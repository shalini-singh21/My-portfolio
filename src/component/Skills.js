import React from "react"
import skill3 from "../Image/skill 3.png"
import skill2 from"../Image/skill2.png"
function Skills () {
    return (

        <>
          
                <h1><span className="skillTitle" >IT Skills</span></h1>
                <img src={skill3} className=" skillImg" />
                <img src={skill2} className=" skillImg" />
        </>
    )
}

export default Skills;