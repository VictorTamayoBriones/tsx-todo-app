import { useTodo } from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export const TodoList = () =>{
    const { todos } = useTodo();
    
    return(
        <ul>
            {todos.map(todo=><TodoItem key={todo.id} todo={todo} />)}
        </ul>
    )
}