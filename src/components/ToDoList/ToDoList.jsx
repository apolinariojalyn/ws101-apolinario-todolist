import React from "react";

function ToDoList({ tasks, input, setInput, addTask, deleteTask, editTask, toggleDone, editIndex }) {
  return (
    <div className="todo-list">
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder= " Input to do here sweetie "
          className="input-field"
        />
        <button onClick={addTask} className="add-button">
          {editIndex !== null ? "Update" : "Add"} { }
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.isDone ? "done" : ""}`}>
            <span>{task.text}</span>
            <div className="task-actions">
              <input
                type="checkbox"
                
                checked={task.isDone}
                onChange={() => toggleDone(index)}  
              />
              
              <button onClick={() => editTask(index)} className="edit-button">
                Click to Edit 
              </button>
              <button onClick={() => deleteTask(index)} className="delete-button">
                Delete 
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
