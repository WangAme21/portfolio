import { FaCode, FaLaptopCode, FaTools, FaDatabase, FaServer, FaPalette } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        'JavaScript',
        'Python',
        'Java',
        'C++',
        'HTML/CSS',
        'SQL',
      ],
    },
    {
      category: 'Web Development',
      icon: <FaLaptopCode />,
      skills: [
        'React',
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'Responsive Design',
        'Vite',
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        'Git & GitHub',
        'VS Code',
        'MongoDB',
        'MySQL',
        'Postman',
        'Figma',
      ],
    },
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I'm proficient in and continuously learning to enhance my development skills</p>
        </div>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">
                <span className="category-icon">{category.icon}</span>
                {category.category}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

