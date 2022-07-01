import React from "react";
import todo from "./store/todo";
import {observer} from "mobx-react-lite";

const ToDo = observer(()=>{
    return(
        <div>
            {todo.todos.map(t=>
                <div className="todo" key={t.id}>
                    <input type='checkbox' checked={t.completed} onChange={()=>todo.completeToDo(t.id)}/>
                    {t.title}
                    <button onClick={()=>todo.removeToDo(t.id)}>X</button>
                </div>
            )}
        </div>
    );
});

export default ToDo;