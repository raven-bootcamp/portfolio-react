import React from 'react';
import nick from "../../images/nickcircle.png"

function About() {
    return(
    <section className="title">
      <h2 class="name">Nick Lee</h2>
      <hr></hr>
      
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
            <img class="mb-3" id="avatar" src={nick} alt="Nick Lee"/>
        
        <p>
          I am a Software Engineer in Test, with a career spanning over 15 years in a variety of different companies and environments.
        </p>
        <p>
          Everything I have learned about coding so far in my career has been self-taught, because I identified a need or an opportunity. But I've never been officially trained.
        </p>
        <p>
          Currently, I'm learning full stack web development via an online bootcamp during the evenings. It is my hope that I can bring myself up to speed with my colleagues and teams at my current company.
        </p>
      </div>  
     </div>
  </section> 
)}
  
export default About;