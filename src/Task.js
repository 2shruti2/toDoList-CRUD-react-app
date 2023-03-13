export const Task = (props) => {
    return (
          <div className= "task" style= {{color : props.completed ? "green" : "brown"}}> 
          <h1 className="heading" > {props.taskName} </h1>
          <button className="compbtn" onClick={() => props.completeTask(props.id)} > Complete </button>
          <button className="crossbtn" onClick={() => props.deleteTask(props.id)} > X </button>
          </div>
    );
}