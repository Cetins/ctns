import React from 'react';

const Education = () => {
  return (
    <div>
      <header>
        <h2 className='subtitle'>Education</h2>
      </header>
      <main>
        <div>
          <section>
            <h3 className='sm-title'>CodeClan – Professional Software Development  </h3>
            <h6>MAY 2022 - SEP 2022</h6>
            <p className='text'>I completed a 16-week hands-on software development programme. This entailed working on solo and group projects. These tasks weren’t just development, we had to use methodologies such as Agile/Scrum, plan our projects, look at UI/UX and other tools to become a complete developer.
            I programmed in Python/Flask, Javascript/React, Java/Spring, SQL, MongoDB</p>
          </section>
          <section>
            <h3 className='sm-title'>Harvard University — Certificate</h3>
            <h6>DEC 2020 - JAN 2021</h6>
            <p className='text'>Addition to the fundamentals of computer programming, I've learned C and Python. I've been a part of an amazing online community where we solve problem sets by guiding each other on our CS50 forum.</p>
          </section>
          <section>
            <h3 className='sm-title'>Istanbul University – BA, Modern Greek Literature</h3>
            <h6>SEP 2000 - AUG 2007</h6>
            <p className='text'>I completed my undergraduate studies in Modern Greek Literature, where I learned about an amazing literature and discovered the great history of ancient Greece.</p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Education;