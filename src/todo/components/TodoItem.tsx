import { useTodo } from "../hooks/useTodo"
import { Todo } from "../interfaces/interfaces"

interface Props{
    todo: Todo
}

export const TodoItem = ({todo}:Props) =>{

    const { toggleTodo } = useTodo();

    return(
        <li  style={{
            textDecoration: todo.completed ? 'line-through' : ''}} 
        onDoubleClick={()=>toggleTodo(todo.id)} >{todo.desc}</li>
    )
}