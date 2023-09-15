import { useState } from "react";
import batman from './todo.module.css'
export default function Todo(props){
    const [isCompleted,setIsCompleted]=useState(false)


//  set
function CompletedHandle(){
     console.log(props.todo);
    //  set iscompleted state to true
     setIsCompleted(true)
}



    return(
        <div className={isCompleted && batman.completed}>
          {/* <h1>My todo for today</h1> */}
          <li>{props.todo}</li>
          <button onClick={CompletedHandle}>completed</button>
          
        </div>
    )
}