import React, { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breafast", "Take a shower", "Walk"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
            setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
    <div className= "to-do-list">

        <h1>To-Do-List</h1>
            <input
                type="text"
                placeholder="Enter a task..."
                value= {newTask}
                onChange= {handleInputChange}/>
            <button 
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}> 
                    <span className= "text">{task}</span>
                    <button className= "delete-button">Delete</button></li>
                )}
            </ol>

    </div>);
}

export default ToDoList;