import React from "react"
import { useRecoilValue } from "recoil"
import { filteredTodoList } from "../state/todos"
import TodoCreator from "./TodoCreator"
import TodoItem from "./TodoItem"
import TodoFilters from "./TodoFilters"

const TodoList = (props) => {
    const todos = useRecoilValue(filteredTodoList)

    return (
        <>
            <TodoCreator />
            <TodoFilters />
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </>
    )
}

export default TodoList
