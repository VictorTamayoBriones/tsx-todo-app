import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"

const INITIAL_STATE: TodoState={
    todoCount: 2,
    todos: [
        {
            id: 1,
            desc: 'Recolectar las gemas del infinito',
            completed: false
        },
        {
            id: 2,
            desc: 'Piedra del alma',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
}

interface Props{
    children: JSX.Element | JSX.Element[],
}

export const TodoProvider = ({children}: Props) =>{

    const [todoState, dispatch] = useReducer( todoReducer, INITIAL_STATE )

    return(
        <TodoContext.Provider value={{ todoState }} >
            { children }
        </TodoContext.Provider>
    )
}