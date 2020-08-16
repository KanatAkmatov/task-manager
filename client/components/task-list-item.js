import React, { useState } from 'react'

const TaskListItem = (props) => {
  const [editingMode, setEditingMode] = useState(false)
  const [editingName, setEditingName] = useState(props.title)
  return (
    <div className="flex justify-between mb-5" key={props.taskId}>
      {editingMode ? (
        <div>
          <button
            type="button"
            className="bg-black text-white"
            onClick={() => {
              props.updateTitle(props.taskId, editingName)
              setEditingMode(false)
            }}
          >
            Save
          </button>
          <input
            type="text"
            className="bg-gray-500"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />
        </div>
      ) : (
        <div className="flex">
          <button
            type="button"
            className="bg-black text-white"
            onClick={() => setEditingMode(true)}
          >
            Edit
          </button>
          <div className="mx-10" key={props.taskId}>
            {props.title}
          </div>
          <div className="switch-status">
            {props.status === 'new' && (
              <button
                type="button"
                className="bg-gray-500"
                onClick={() => props.updateStatus(props.taskId, 'in progress')}
              >
                in progress
              </button>
            )}
            {props.status === 'in progress' && (
              <div>
                <button
                  type="button"
                  className="bg-gray-500 mr-5"
                  onClick={() => props.updateStatus(props.taskId, 'blocked')}
                >
                  blocked
                </button>
                <button
                  type="button"
                  className="bg-gray-500"
                  onClick={() => props.updateStatus(props.taskId, 'done')}
                >
                  done
                </button>
              </div>
            )}
            {props.status === 'blocked' && (
              <button
                type="button"
                className="bg-gray-500"
                onClick={() => props.updateStatus(props.taskId, 'in progress')}
              >
                unblocked
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskListItem
