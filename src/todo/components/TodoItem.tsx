import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { Todo } from "../interfaces/interfaces"

interface Props{
    todo: Todo
}

export const TodoItem = ({todo}:Props) =>{

    const { toggleTodo } = useContext(TodoContext);

    const handleDbClick=()=>{
        toggleTodo(todo.id)
    }

    return(
        <li  style={{
            textDecoration: todo.completed ? 'line-through' : ''}} 
        onDoubleClick={handleDbClick} >{todo.desc}</li>
    )
}