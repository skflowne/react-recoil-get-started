import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import todoState from "../state/todos"

const TodoCreator = (props) => {
    const [inputVal, setInputVal] = useState("")

    const setTodoList = useSetRecoilState(todoState.list)

    const addTodo = () => {
        setTodoList((old) => {
            return [
                ...old,
                {
                    id: getId(),
                    text: inputVal,
                    isComplete: false,
                },
            ]
        })
    }

    const onChange = (e) => {
        setInputVal(e.target.value)
    }

    return (
        <div>
            <input type="text" value={inputVal} onChange={onChange} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

let id = 0
function getId() {
    return id++
}

export default TodoCreator
