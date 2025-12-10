import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import './Experiences.css'

const Experiences = () => {
  const education = [
    {
      type: 'education',
      title: 'College',
      company: 'University of Cebu - Main Campus',
      location: 'Sanciangko St, Cebu City, 6000 Cebu',
      period: '2022 - Present',
      description: [
        'Currently pursuing my college education',
        'Gaining knowledge and skills in my field of study',
      ],
    },
    {
      type: 'education',
      title: 'Senior High School',
      company: 'San Remigio National High School',
      location: 'Goopio Street, Poblacion, San Remigio, Cebu',
      period: '2020 - 2022',
      description: [
        'Completed senior high school education',
        'Developed foundational knowledge and skills',
      ],
    },
    {
      type: 'education',
      title: 'Junior High School',
      company: 'San Remigio National High School',
      location: 'Goopio Street, Poblacion, San Remigio, Cebu',
      period: '2016 - 2020',
      description: [
        'Completed junior high school education',
        'Built strong academic foundation',
      ],
    },
    {
      type: 'education',
      title: 'Elementary',
      company: 'Punta Elementary School',
      location: 'Barangay Punta, San Remigio, Cebu',
      period: '2009 - 2016',
      description: [
        'Completed elementary education',
        'Established fundamental learning skills',
      ],
    },
  ]

  const allItems = [...education]

  return (
    <section id="experiences" className="experiences-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey and educational background</p>
        </div>
        <div className="timeline">
          {allItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                {item.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <h4 className="timeline-company">{item.company}</h4>
                {item.location && <p className="timeline-location">{item.location}</p>}
                <ul className="timeline-description">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences

