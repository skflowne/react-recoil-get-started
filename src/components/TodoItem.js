import React from "react"
import { todoList } from "../state/todos"
import { useRecoilState } from "recoil"
import styles from "./TodoItem.module.scss"

const TodoItem = (props) => {
    const { todo } = props

    const [todos, setTodos] = useRecoilState(todoList)

    const updateTodo = (e) => {
        const text = e.target.value

        const newTodos = todos.map((t) => {
            if (t.id === todo.id) {
                return { ...todo, text }
            }
            return t
        })
        setTodos(newTodos)
    }

    const deleteTodo = (e) => {
        const newTodos = todos.filter((t) => t.id !== todo.id)
        setTodos(newTodos)
    }

    const toggleTodoCompletion = (e) => {
        const newTodos = todos.map((t) => {
            if (t.id === todo.id) {
                return { ...t, isComplete: !todo.isComplete }
            }
            return t
        })
        setTodos(newTodos)
    }

    return (
        <div className={styles.root}>
            <input type="text" value={todo.text} onChange={updateTodo} />
            <input type="checkbox" checked={todo.isComplete} onChange={toggleTodoCompletion} />
            <button onClick={deleteTodo}>X</button>
        </div>
    )
}

export default TodoItem
