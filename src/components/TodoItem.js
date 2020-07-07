import React from "react"

const TodoItem = (props) => {
    const { todo } = props
    return (
        <div className="todoItem">
            <input type="text" value={todo.text} 
            <input type="checkbox" checked={todo.complete} />
        </div>
    )
}

export default TodoItem
