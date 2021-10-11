import React from 'react'; 

function Resume() {

return(
    <section class="mb-5">
        <h2 className="resume">Resume</h2>
        <hr></hr>
       
           

        <div class="row justify-content-center" id="resume">
            {/* <div class="justify-content-center mt-2"> */}
            <div class="mt-5 pl-5 pr-5">
                <h2>Nick Lee</h2>
                <p>Agile Coach and Software Engineer in Test with 12 years experience in both automated and manual testing environments.</p>
                <p>I believe that Agility is paramount.</p>
                <p>I have a genuine passion for Agile development, people and teams.</p>
                <p>I constantly seek improvement in the work that I do and in myself.</p>               
                <a href="https://raven-bootcamp.github.io/Portfolio/assets/Nicholas%20Lee%20-%20Resume.pdf" class="link" target="_blank" style={{color: "yellow", fontWeight: "bolder"}}>Download Resume (PDF)</a>
            </div>
        </div>

        <div class= "justify-content-center mt-2 ml-auto pl-auto">
            {/* <div>
                <h2>Proficiencies</h2>
                <p>HTML, CSS (Bootstrap, Foundation, HandleBars), JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
                <p>Node.js, Express.js, SQL, Sequelize, NoSQL, Python, APIs, Templating</p>
                
            </div> */}

            <div>
                <h2>My Skills</h2>

                <p>HTML:</p>
                <div class="skill-container">
                    <div class="skills html">95%</div>
                </div>

                <p>CSS:</p>
                <div class="skill-container">
                    <div class="skills css">80%</div>
                </div>

                <p>JavaScript:</p>
                <div class="skill-container">
                    <div class="skills js">70%</div>
                </div>

                <p>CSS Frameworks (Bootstrap, Bulma, Tailwind):</p>
                <div class="skill-container">
                    <div class="skills frameworks">90%</div>
                </div>

                <p>jQuery:</p>
                <div class="skill-container">
                    <div class="skills jquery">60%</div>
                </div>
                
                <p>Node JS:</p>
                <div class="skill-container">
                    <div class="skills node">90%</div>
                </div>

                <p>Git:</p>
                <div class="skill-container">
                    <div class="skills git">80%</div>
                </div>

                <p>Databases (MySQL, Mongo):</p>
                <div class="skill-container">
                    <div class="skills databases">75%</div>
                </div>

                <p>React JS:</p>
                <div class="skill-container">
                    <div class="skills react">70%</div>
                </div>

                <p>Express:</p>
                <div class="skill-container">
                    <div class="skills express">65%</div>
                </div>

                <p>Testing (Jest, Selenium, Cypress:</p>
                <div class="skill-container">
                    <div class="skills testing">95%</div>
                </div>

            </div>

        </div>

    </section>
);
}

export default Resume;