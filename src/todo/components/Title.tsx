import { useTodo } from "../hooks/useTodo"

export const Title = () =>{

    const { pending } = useTodo();

    return(
        <h1>Todos Pending: { pending }</h1>
    )
}