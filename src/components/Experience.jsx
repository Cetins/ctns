import React from 'react'

const Experience = () => {
  return (
    <div>
      <header>
        <h3 className='centered-md-title'>Experience</h3>
      </header>
      <main className='education-cards'>
        <section class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Nail Solutions</h2>
              <h3>Entrepreneur, Business Owner</h3>
              <h4>Glasgow, UK</h4>
              <h5>SEP 2015 - MAY 2022</h5>
            </div>
            <div class="flip-card-back">
              <h4>Relatable Skills</h4>
              <ul className='bullet-points'>
                <li>Interpersonal Communication</li>
                <li>Social Media Content Creation</li>
                <li>No-code web development with WIX, WordPress</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                <h2>Yufa Jewelry</h2>
                <h3>International Sales Representative</h3>
                <h4>Istanbul, Turkey</h4>
                <h5>MAY 2012 - OCT 2014</h5>
              </div>
              <div class="flip-card-back">
                <h4>Relatable Skills</h4>
                <ul className='bullet-points'>
                  <li>Market research</li>
                  <li>Product photography and catalog management</li>
                </ul>
              </div>
            </div>
        </section>

        <section class="flip-card">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                <h2>BR Marsel Jewellery</h2>
                <h3>Greece Sales Representative</h3>
                <h4>Istanbul, Turkey</h4>
                <h5>JUNE 2008 - APRIL 2012</h5>
              </div>
              <div class="flip-card-back">
                <h4>Relatable Skills</h4>
                <ul className='bullet-points'>
                  <li>Market research</li>
                  <li>Stock management with CRM software</li>
                  <li>Product photography and catalog management</li>
                </ul>
              </div>
            </div>
        </section>
      </main>
    </div>
  )
}

export default Experience