import React from "react"
import { allTodoCount, completedTodoCount, uncompletedTodoCount, todoCompletionPercentage } from "../state/todos"
import { useRecoilValue } from "recoil"
import styles from "./TodoStats.module.scss"

const TodoStats = (props) => {
    const allTodos = useRecoilValue(allTodoCount)
    const completedTodos = useRecoilValue(completedTodoCount)
    const uncompletedTodos = useRecoilValue(uncompletedTodoCount)
    const completionPercentage = useRecoilValue(todoCompletionPercentage)

    return (
        <div className={styles.root}>
            <div>
                <label>Todos</label>
                <span>{allTodos}</span>
            </div>
            <div>
                <label>Done</label>
                <span>{completedTodos}</span>
            </div>
            <div>
                <label>Not done</label>
                <span>{uncompletedTodos}</span>
            </div>
            <div>
                <label>Progress</label>
                <span>{completionPercentage * 100}%</span>
            </div>
        </div>
    )
}

export default TodoStats
