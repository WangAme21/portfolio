import { FaGithub, FaFacebook, FaDownload } from 'react-icons/fa'
import profileImage from '../imgs/image.png'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="profile-image">
                <img src={profileImage} alt="John Aries C. Rizada" className="profile-img" />
              </div>
              <div className="image-border"></div>
            </div>
          </div>
          <div className="about-text">
            <h1 className="about-title">
              Hi, I'm <span className="highlight">John Aries C. Rizada</span>
            </h1>
            <h2 className="about-subtitle">Full Stack Developer & Creative Problem Solver</h2>
            <p className="about-description">
              I'm a passionate developer with a love for creating beautiful, functional, and user-friendly applications. 
              With expertise in modern web technologies, I bring ideas to life through clean code and innovative solutions.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="/resume.pdf" download="John_Aries_Rizada_Resume.pdf" className="btn btn-secondary">
                <FaDownload /> Download Resume
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/WangAme21" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/legtik.john" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

