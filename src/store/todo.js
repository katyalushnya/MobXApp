import {makeAutoObservable} from "mobx";

class Todo{
    todos=[
        {id:1,title:'Need to make homework', completed:false},
        {id:2,title:'read book', completed:false},
        {id:3,title:'And smt else', completed:false},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addToDo(todo){
        this.todos.push(todo);
    }
    removeToDo(id){
        this.todos.filter(todo => todo.id !== id)
        console.log('remove')
    }
    completeToDo(id){
        this.todos.map(todo=>todo.id!==id?{...todo,completed: !todo.completed}:todo)
        console.log('complete')
    }
}

export default new Todo()