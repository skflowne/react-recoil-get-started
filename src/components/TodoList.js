import React from "react"
import { useRecoilValue } from "recoil"
import { filteredTodoList } from "../state/todos"
import TodoCreator from "./TodoCreator"
import TodoItem from "./TodoItem"
import TodoFilters from "./TodoFilters"
import TodoStats from "./TodoStats"
import styles from "./TodoList.module.scss"

const TodoList = (props) => {
    const todos = useRecoilValue(filteredTodoList)

    return (
        <div className={styles.root}>
            <TodoStats />
            <TodoCreator />
            <TodoFilters />
            <div className={styles["todo-list"]}>
                {todos.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />
                })}
            </div>
        </div>
    )
}

export default TodoList
