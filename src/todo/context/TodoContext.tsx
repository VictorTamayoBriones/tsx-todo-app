import React, { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

export type TodoContextProps = {
    todoState: TodoState
}

export const TodoContext = React.createContext<TodoContextProps>({} as TodoContextProps);