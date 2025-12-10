import { useState, useEffect } from 'react'
import { FaArrowLeft, FaPlus, FaTrash, FaDumbbell } from 'react-icons/fa'
import './FitnessTracker.css'

const FitnessTracker = () => {
  const [workouts, setWorkouts] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    exercise: '',
    sets: '',
    reps: '',
    weight: '',
    date: new Date().toISOString().split('T')[0],
  })

  useEffect(() => {
    const savedWorkouts = localStorage.getItem('fitnessWorkouts')
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('fitnessWorkouts', JSON.stringify(workouts))
  }, [workouts])

  const addWorkout = () => {
    if (formData.exercise && formData.sets && formData.reps) {
      const newWorkout = {
        id: Date.now(),
        ...formData,
        sets: parseInt(formData.sets),
        reps: parseInt(formData.reps),
        weight: formData.weight ? parseFloat(formData.weight) : null,
      }
      setWorkouts([newWorkout, ...workouts])
      setFormData({
        exercise: '',
        sets: '',
        reps: '',
        weight: '',
        date: new Date().toISOString().split('T')[0],
      })
      setShowAddForm(false)
    }
  }

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id))
  }

  const groupedWorkouts = workouts.reduce((acc, workout) => {
    const date = workout.date
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(workout)
    return acc
  }, {})

  const sortedDates = Object.keys(groupedWorkouts).sort((a, b) => new Date(b) - new Date(a))

  const totalWorkouts = workouts.length
  const totalExercises = new Set(workouts.map((w) => w.exercise)).size

  return (
    <div className="fitness-tracker-page">
      <div className="fitness-tracker-container">
        <a href="#/" className="back-button">
          <FaArrowLeft /> Back to Projects
        </a>
        <div className="fitness-tracker">
          <div className="fitness-header">
            <h1>Fitness Tracker</h1>
            <div className="fitness-stats">
              <div className="stat-item">
                <span className="stat-value">{totalWorkouts}</span>
                <span className="stat-label">Workouts</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{totalExercises}</span>
                <span className="stat-label">Exercises</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="add-workout-button"
          >
            <FaPlus /> {showAddForm ? 'Cancel' : 'Add Workout'}
          </button>

          {showAddForm && (
            <div className="workout-form">
              <input
                type="text"
                placeholder="Exercise name (e.g., Bench Press)"
                value={formData.exercise}
                onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
                className="form-input"
              />
              <div className="form-row">
                <input
                  type="number"
                  placeholder="Sets"
                  value={formData.sets}
                  onChange={(e) => setFormData({ ...formData, sets: e.target.value })}
                  className="form-input"
                  min="1"
                />
                <input
                  type="number"
                  placeholder="Reps"
                  value={formData.reps}
                  onChange={(e) => setFormData({ ...formData, reps: e.target.value })}
                  className="form-input"
                  min="1"
                />
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  className="form-input"
                  step="0.5"
                  min="0"
                />
              </div>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="form-input"
              />
              <button onClick={addWorkout} className="submit-workout-button">
                Add Workout
              </button>
            </div>
          )}

          <div className="workouts-list">
            {sortedDates.length === 0 ? (
              <div className="empty-state">
                <FaDumbbell size={48} />
                <p>No workouts yet. Add your first workout to get started!</p>
              </div>
            ) : (
              sortedDates.map((date) => (
                <div key={date} className="workout-day">
                  <h3 className="workout-date">
                    {new Date(date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </h3>
                  {groupedWorkouts[date].map((workout) => (
                    <div key={workout.id} className="workout-item">
                      <div className="workout-info">
                        <h4 className="workout-exercise">{workout.exercise}</h4>
                        <div className="workout-details">
                          <span>{workout.sets} sets</span>
                          <span>×</span>
                          <span>{workout.reps} reps</span>
                          {workout.weight && (
                            <>
                              <span>@</span>
                              <span>{workout.weight} kg</span>
                            </>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => deleteWorkout(workout.id)}
                        className="delete-workout-button"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FitnessTracker

