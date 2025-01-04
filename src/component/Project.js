import React from "react";
import { Accordion } from "react-bootstrap"
import myntra2 from"../Image/myntra2.jpg"
import todo from "../Image/todo.png"
import amazon from"../Image/amazon.png"
import text from "../Image/text.png"
import port from"../Image/port.png"
import toe from"../Image/toe.png"
function Projects() {
    return (

        <Accordion className="Accordion">

            <Accordion.Item eventKey="1" className="item">
                <Accordion.Header className="heading-acc">  <img src={toe} className="projectImg" /><strong><span>Tic-Tac-Toe </span> </strong> </Accordion.Header>
                <Accordion.Body className="body">
                    <strong> Description: </strong> created a Tic Tac Toe responsive web page game by using  <srong> HTML, CSS  and JavaScript </srong>with some images ,
                    used some awesome icons for giving beautiful layout to looks attractive.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="item">
                <Accordion.Header className="heading-acc"><img src={todo} className="projectImg"/>  <strong><span>To-Do-List </span> </strong></Accordion.Header>
                <Accordion.Body className="body">
                    <strong>  Description:</strong> created a responsive To-Do-List , a list of tasks that are need to be
                    completed typically organized in order of priority by using  <strong>React JS </strong> & uses  some icons.
                    also utilized the useState hook from React and local Storage. It manages the State of tasks .
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="item">
                <Accordion.Header className="heading-acc"> <img src={port} className="projectImg" /> <strong><span>Porfolio </span> </strong></Accordion.Header>
                <Accordion.Body className="body">
                    <strong>  Description:</strong> Created a portfolio website by using  <strong> React JS </strong>. Explore my interactive portfolio
                    I have added animations and transition by using CSS and react Scroll.
                    This project  is my practice part .
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="item">
                <Accordion.Header className="heading-acc">   <img src={text} className="projectImg" /><strong><span> Text Editor  </span> </strong></Accordion.Header>
                <Accordion.Body className="body">
                    <strong>  Description:</strong> I have created a text calculator by using  <strong> React JS </strong>React JS and added some <strong> bootstrap </strong> styling,
                    it helps to calculate the number of words and characters ,
                    convert in upper case lower case you can preview your typed text in the text area very helpful text calculator.
                </Accordion.Body>
            </Accordion.Item>  



            <Accordion.Item eventKey="5" className="item">
                <Accordion.Header className="heading-acc">  <img src={myntra2} className="projectImg" /><strong><span> Myntra clone</span>   </strong></Accordion.Header>
                <Accordion.Body className="body">
                    <strong>  Description:</strong>Created a  Myntra clone webpage by using <strong>  React JS </strong> ,
                    it is  quite responsive webpage by using  react router and react scroll.
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="6" className="item">
                <Accordion.Header className="heading-acc"> <img src={amazon} className="projectImg" />   <strong><span>Amazon clone</span> </strong></Accordion.Header>
                <Accordion.Body className="body">
                    <strong>  Description:</strong>created an amazon Clone webpage by using <strong>HTML , CSS , JavaScript.</strong>
                </Accordion.Body>
            </Accordion.Item>

           



        </Accordion>






    )
}

export default Projects;