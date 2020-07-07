import React from "react"
import { useRecoilValue } from "recoil"
import { todoList } from "../state/todos"
import TodoCreator from "./TodoCreator"
import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const todos = useRecoilValue(todoList)

    return (
        <>
            <TodoCreator />
            {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </>
    )
}

export default TodoList
