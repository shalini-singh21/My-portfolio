import React from "react"
import skill3 from "../Image/skill 3.png"
import skill2 from"../Image/skill2.png"

import java from"../Image/java.png"
import js from "../Image/js.png"
import css from"../Image/css.png"
import sql from "../Image/sql.png"
import html from "../Image/html.png"
function Skills () {
    return ( 

        <>
                <h1><span className="skillTitle" >IT Skills</span></h1>
                <img src={skill3} className=" skillImg" />
                <img src={skill2} className=" skillImg" />
                <img src={java} className=" skillImg" />
                <img src={css} className=" skillImg" />
                <img src={sql} className=" skillImg" />
                <img src={html} className=" skillImg" />
                <img src={js} className=" skillImg" />
        </>
    )
}

export default Skills;