import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import { todoList } from "../state/todos"
import styles from "./TodoCreator.module.scss"

const TodoCreator = (props) => {
    const [inputVal, setInputVal] = useState("")

    const setTodos = useSetRecoilState(todoList)

    const addTodo = () => {
        setTodos((old) => {
            return [
                ...old,
                {
                    id: getId(),
                    text: inputVal,
                    isComplete: false,
                },
            ]
        })
        setInputVal("")
    }

    const onChange = (e) => {
        setInputVal(e.target.value)
    }

    const onKeyPress = (e) => {
        console.log("keypress", e)
        if (e.key === "Enter") {
            addTodo()
        }
    }

    return (
        <div className={styles.root}>
            <input
                type="text"
                placeholder="What do you have to do ?"
                value={inputVal}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

let id = 0
function getId() {
    return id++
}

export default TodoCreator
