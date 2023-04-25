import React from 'react';

const Education = () => {
  return (
    <div>
      <header>
        <h2 className='subtitle'><span>Education</span></h2>
      </header>
      <main className='education-cards'>
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>CodeClan</h2>
              <h3>Professional Software Development</h3>
              <h3>SCQF Level 8</h3>
              <h5>MAY 2022 - SEP 2022</h5>
            </div>
            <div class="flip-card-back">
              <ul className='bullet-points'>
                <li>Python, JavaScript, Java</li>
                <li>Database development with SQL, MongoDB</li>
                <li>Agile software development</li>
                <li>Solo/Group full-stack app development</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Harvard University</h2>
              <h3>CS50 Introduction to Computer Science</h3>
              <h3>Verified Certificate</h3>
              <h5>DEC 2020 - JAN 2021</h5>
            </div>
            <div class="flip-card-back">
              <ul className='bullet-points'>
                <li>C, Python, SQL</li>
                <li>Designing Algorithms with C</li>
                <li>Database queries with SQL</li>
                <li>REST API with Flask</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Istanbul University</h2>
              <h3>Modern Greek Language and Literature</h3>
              <h3>BAs</h3>
              <h5>SEP 2000 - AUG 2007</h5>
            </div>
            <div class="flip-card-back">
              <ul className='bullet-points'>
                <li>Evolution of Greek literature</li>
                <li>Greek Mythology</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Education;