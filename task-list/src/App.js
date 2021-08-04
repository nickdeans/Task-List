import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header.js'
import Tasks from './components/Tasks.js'
import AddTask from './components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Appointment',
        day: 'Feb 1',
        reminder: true,
    },
    {
      id: 12,
      text: 'Appointment 2',
      day: 'Feb 10',
      reminder: true,
    },
    {
      id: 3,
      text: 'Appointment 3',
      day: 'July 29',
      reminder: false,
    },
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id 
  ? { ...task, reminder:!task.reminder } : task))
}

  return (
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;
