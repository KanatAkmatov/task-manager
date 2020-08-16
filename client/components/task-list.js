import React, { useState } from 'react'
import TaskListItem from './task-list-item'

const TaskList = (props) => {
  const [newTask, setNewTask] = useState('')
  return (
    <div>
      {props.tasks.map((el) => (
        <TaskListItem
          title={el.title}
          taskId={el.taskId}
          status={el.status}
          updateStatus={props.updateStatus}
          key={el.taskId}
          updateTitle={props.updateTitle}
        />
      ))}
      <input
        type="text"
        value={newTask}
        className="bg-gray-800"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="button" onClick={() => props.addTask(newTask)}>
        Add Tasks
      </button>
    </div>
  )
}

export default TaskList
