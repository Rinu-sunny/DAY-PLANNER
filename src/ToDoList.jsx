import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewtask] = useState("");

  function handleInputChange(event) {
    setNewtask(event.target.value);
  }
  function addTask() {

    if(newTask.trim() !== "" ){
    setTasks(t => [...tasks,newTask]);
    setNewtask("");
    }
  }
  function deleteTask(index) {
  const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
    
  }
  function moveTaskUp(index) {
    if(index>0){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index- 
       1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if(index<tasks.length-1){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+ 
       1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
    
  }

  return (
    <div className="container">
    <div className="to-do-list" style={{backgroundImage:'url("https://wallpapercave.com/wp/wp2698875.jpg")',
                                    }}>
    
      <p className="textstyle">DAY PLANNER</p>
      <div className="input-group mb-3">
        
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          ADD TASK
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item" key={index}>
           <span className="text">{task}</span>
            <div>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            </div>  
          </li>
        ))}
      </ul>
    </div>
    </div>  
  );
}
export default ToDoList;
