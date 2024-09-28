import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);  
  const [input, setInput] = useState("");  
  const [editIndex, setEditIndex] = useState(null);  
  const handleAddTask = () => {
    if (input.trim()) {
      if (editIndex !== null) {
        

        const updatedTasks = [...tasks];
        updatedTasks[editIndex].text = input;
        setTasks(updatedTasks);
        setEditIndex(null);  
      } else {
        
        setTasks([...tasks, { text: input, isDone: false }]);
      }
      setInput("");  
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);  
    setTasks(newTasks);
    if (editIndex !== null && editIndex === index) {
      setInput("");  
      setEditIndex(null);  
    }
  };

  const handleEditTask = (index) => {
    setInput(tasks[index].text);  
    setEditIndex(index);  
  };

  const handleToggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;  
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Things To Be Done</h1>
      <ToDoList
        tasks={tasks}
        input={input}
        setInput={setInput}
        addTask={handleAddTask}
        deleteTask={handleDeleteTask}
        editTask={handleEditTask}
        toggleDone={handleToggleDone}
        editIndex={editIndex}
      />
    </div>
  );
}

export default App;
