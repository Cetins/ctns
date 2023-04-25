import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <article className='main-content'>
        <header>
          <h2 className='subtitle'><span>Projects</span></h2>
        </header>
        <main className='centered-main'>
            <section className='project-card'>
              <div>
                <img className='project-image' src="images/sales.png" alt="Sales Tracker"/>
              </div>
              <div>
                <div className='project-brief'>
                  <h2>Sales Tracker</h2>
                  <h3>Javascript | React | MongoDB</h3>
                  <h4>Open Source Project | Solo</h4>
                  <p>Solving a real life problem, experienced in first hand, Sales Tracker is so far my favorite project to work on.</p>
                  <p>It is a CRM application where users can store their sales and see live reports. With consideration of user experience, application requires minimal input from the user. It's simple yet elegantly mines the sales data not just for financial reports but also tracks the product stock at the meantime.</p>
                  <a className='repository-link' href="https://github.com/Cetins/sale-tracker-client"><AiFillGithub className='github-icon'/>Project Repository</a>
                </div>
              </div>
            </section>

            <section className='project-card'>
              <div>
                <img className='project-image' src="images/codebnb.png" alt="CodeBNB"/>
              </div>
              <div>
                <div className='project-brief'>
                  <h2>CodeBNB</h2>
                  <h3>Javascript | React | MongoDB | Java</h3>
                  <h4>Educational Project | Solo</h4>
                  <p>My main goal was to understand the development process of a full stack application when multiple technologies combined. I preferred to clone AirBnb as I was familiar with the end product and I would like to benefit from my own user experience.</p>
                  <p>When I started this project I wasn't quite confident with MongoDB. After getting more information about both databases I believe this project would perform better with a NoSQL database. If I ever had a chance to start over again I would prefer MongoDB instead SQL.</p>
                  <a className='repository-link' href="https://github.com/Cetins/bnb-front-end"><AiFillGithub className='github-icon'/>Project Repository</a>
                </div>
              </div>
            </section>

            <section className='project-card'>
              <div>
                <img className='project-image' src="images/demonclan.png" alt="Demon Clan"/>
              </div>
              <div>
                <div className='project-brief'>
                  <h2>Demon Clan</h2>
                  <h3>Java | Spring | Jnuit</h3>
                  <h4>Educational Project | Solo</h4>
                  <p>The Demon Clan Project was a Java-based project that taught me a great deal about object-oriented programming (OOP), including classes and interfaces. Through this project, I was able to gain valuable experience in unit testing with JUnit. </p>
                  <p>The best part was that our entire cohort enjoyed this project so much that we even volunteered to work on it as part of our weekend homework. Who taught the creating a game back-end would be more fun than the game itself.</p>
                  <a className='repository-link' href="https://github.com/Cetins/DemonClan"><AiFillGithub className='github-icon'/>Project Repository</a>
                </div>
              </div>
            </section>
            
            <section className='project-card'>
              <div>
                <img className='project-image' src="images/gymmy.png" alt="Gymmy"/>
              </div>
              <div>
                <div className='project-brief'>
                  <h2>Gymmy</h2>
                  <h3>Python | Flask | SQL</h3>
                  <h4>Educational Project | Solo</h4>
                  <p>I developed a fitness industry CRM app using Python and Flask, allowing for efficient management of customer data with SQL. This experience taught me about full-stack web app development and the software development life cycle. </p>
                  <p>In hindsight, I would have preferred to separate the client and server-side code and use Django instead of Flask for a more modular and scalable app. Nonetheless, I am proud of my work and the skills I gained.</p>
                  <a className='repository-link' href="https://github.com/Cetins/gymmy"><AiFillGithub className='github-icon'/>Project Repository</a>
                </div>
              </div>
            </section>
        </main>
    </article>
  )
}

export default Projects;