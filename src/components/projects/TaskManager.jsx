import { useState, useEffect } from 'react'
import { FaArrowLeft, FaPlus, FaTrash, FaCheck, FaEdit } from 'react-icons/fa'
import './TaskManager.css'

const TaskManager = () => {
  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [filter, setFilter] = useState('all') // all, active, completed

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      }
      setTasks([...tasks, newTask])
      setInputValue('')
    }
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const startEdit = (id) => {
    setEditingId(id)
    const task = tasks.find((t) => t.id === id)
    setInputValue(task.text)
  }

  const saveEdit = () => {
    if (inputValue.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editingId ? { ...task, text: inputValue.trim() } : task
        )
      )
      setEditingId(null)
      setInputValue('')
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setInputValue('')
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const activeTasksCount = tasks.filter((task) => !task.completed).length
  const completedTasksCount = tasks.filter((task) => task.completed).length

  return (
    <div className="task-manager-page">
      <div className="task-manager-container">
        <a href="#/" className="back-button">
          <FaArrowLeft /> Back to Projects
        </a>
        <div className="task-manager">
          <div className="task-manager-header">
            <h1>Task Manager</h1>
            <p className="task-stats">
              {activeTasksCount} active • {completedTasksCount} completed
            </p>
          </div>

          <div className="task-input-section">
            <div className="task-input-container">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    editingId ? saveEdit() : addTask()
                  }
                }}
                placeholder={editingId ? 'Edit task...' : 'Add a new task...'}
                className="task-input"
              />
              <button
                onClick={editingId ? saveEdit : addTask}
                className="add-task-button"
              >
                {editingId ? <FaCheck /> : <FaPlus />}
              </button>
              {editingId && (
                <button onClick={cancelEdit} className="cancel-edit-button">
                  Cancel
                </button>
              )}
            </div>
          </div>

          <div className="filter-buttons">
            <button
              onClick={() => setFilter('all')}
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`filter-button ${filter === 'active' ? 'active' : ''}`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
            >
              Completed
            </button>
          </div>

          <div className="tasks-list">
            {filteredTasks.length === 0 ? (
              <div className="empty-state">
                <p>No tasks found. Add one to get started!</p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`task-item ${task.completed ? 'completed' : ''}`}
                >
                  <div className="task-content">
                    <button
                      onClick={() => toggleComplete(task.id)}
                      className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                    >
                      {task.completed && <FaCheck />}
                    </button>
                    <span className="task-text">{task.text}</span>
                  </div>
                  <div className="task-actions">
                    {!task.completed && (
                      <button
                        onClick={() => startEdit(task.id)}
                        className="task-action-button edit"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                    )}
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="task-action-button delete"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskManager

