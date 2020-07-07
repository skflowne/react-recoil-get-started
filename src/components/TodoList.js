import React from "react"
import { useRecoilValue } from "recoil"
import todoState from "../state/todos"
import TodoCreator from "./TodoCreator"
import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const todoList = useRecoilValue(todoState.list)

    return (
        <>
            <TodoCreator />
            {todoList.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </>
    )
}

export default TodoList
