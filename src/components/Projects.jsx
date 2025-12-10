import { useNavigate } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      title: 'Calculator App',
      description: 'A fully functional calculator with basic arithmetic operations, percentage calculations, and a clean, modern interface.',
      image: '🔢',
      route: '/calculator',
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'A comprehensive task management application with add, edit, delete, and filter functionality. Track your tasks and stay organized.',
      image: '📋',
      route: '/task-manager',
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'Track your workouts, exercises, sets, reps, and weights. Organize your fitness journey with detailed workout logging.',
      image: '💪',
      route: '/fitness-tracker',
    },
    {
      id: 4,
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant that responds to your messages with helpful and engaging conversations.',
      image: '🤖',
      route: '/ai-chat',
    },
  ]

  const handleProjectClick = (route) => {
    navigate(route)
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A collection of my recent work and side projects</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => handleProjectClick(project.route)}>
              <div className="project-icon">{project.image}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <button
                  className="project-link"
                  title="Open Project"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleProjectClick(project.route)
                  }}
                >
                  <FaExternalLinkAlt /> Open App
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

