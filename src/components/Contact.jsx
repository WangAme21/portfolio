import { useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaFacebook } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    setStatus('Message sent successfully! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'rizadajohn5@gmail.com', link: null },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Sambag I, Cebu City, Cebu', link: null },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">I'm always open to discussing new projects and opportunities</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-description">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-detail">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-detail-content">
                    <span className="contact-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="contact-value">
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="social-links-contact">
              <a href="https://github.com/WangAme21" target="_blank" rel="noopener noreferrer" className="social-link-contact">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/legtik.john" target="_blank" rel="noopener noreferrer" className="social-link-contact">
                <FaFacebook />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {status && <div className="form-status">{status}</div>}
            <button type="submit" className="btn btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

