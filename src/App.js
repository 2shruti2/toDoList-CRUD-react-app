
import './App.css';
import { useState} from 'react';
import { Task } from './Task';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) =>{
    setNewTask(event.target.value);
  }

  const addTask =() =>{
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id +1,
      taskName: newTask,
      completed : false
    }
    setToDoList([...toDoList, task]);
  }

  const completeTask = (id) =>{
    setToDoList(
      toDoList.map((task) => {
        if(task.id === id){
          return{ ...task, completed: true};
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (id) =>{
    setToDoList(toDoList.filter((task) => task.id !== id ));
  }

  return (
    <div className="App"> 

    <div className="addTask">
      <input className= "input" onChange={handleChange}/>
      <button className= "mainbtn" onClick={addTask}> Add Task </button>
    </div>

    <div className="List">
      {toDoList.map((task)=> {
        return <Task taskName={task.taskName}
                 id= {task.id}
                 completed={task.completed}
                 completeTask={completeTask} 
                 deleteTask={deleteTask} />
      })}
    </div>

    </div>
  );
}

export default App;
