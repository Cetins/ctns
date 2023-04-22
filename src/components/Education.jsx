import React from 'react';

const Education = () => {
  return (
    <div>
      <header>
        <h3 className='centered-text'>Education</h3>
      </header>
      <main className='education-cards'>
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Professional Software Development, SCQF 8</h2>
            </div>
            <div class="flip-card-back">
              <h3>CodeClan</h3>
              <h6>MAY 2022 - SEP 2022</h6>
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
              <h2>CS50x, Certificate</h2>
            </div>
            <div class="flip-card-back">
              <h3>Harvard University</h3>
              <h6>DEC 2020 - JAN 2021</h6>
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
              <h2>Modern Greek Literature, BA</h2>
            </div>
            <div class="flip-card-back">
              <h3>Istanbul University</h3>
              <h6>SEP 2000 - AUG 2007</h6>
              <ul className='bullet-points'>
                <li>Evolution of Greek literature</li>
                <li>Ancient Greek History</li>
                <li>Modern literature</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Education;