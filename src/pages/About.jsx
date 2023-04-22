import React from 'react'
import Education from '../components/Education'
import Experience from '../components/Experience'

const About = () => {
  return (
    <article className='main-content'>
        <header>
            <h2 className='subtitle'>Junior Software Engineer</h2>
        </header>
        <main>
            <p className='text'>Hi there! My name is Sezen Cetin, and I'm a software engineer based in Glasgow. One day, I decided to use a drag-and-drop website builder for my small business. I enjoyed it deeply, and one tutorial followed another, until I found myself in CS50x, learning the C language. Since then, programming has been my sole focus and passion</p>
            <Education />
            <Experience />
        </main>
    </article>
  )
}

export default About