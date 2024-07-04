import React, { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
            setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
                setTasks(t =>[...t, newTask]);
                setNewTask("");
            }
    }
    

    function deleteTask(index){
        const updatedTasks = tasks.filter((element, i) => i !== index)
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

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
                            <button 
                                className= "delete-button"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button 
                                className= "move-button" //arrow button up//
                                onClick={() => moveTaskUp(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="19px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg>
                            </button>
                            <button 
                                className= "move-button"
                                onClick={() => moveTaskDown(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="19px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>
                            </button>
                    </li>
                )}
            </ol>

    </div>);
}

export default ToDoList;