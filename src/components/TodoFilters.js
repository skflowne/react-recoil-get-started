import React from "react"
import { filters } from "../state/todos/filters"
import { todoListFilter } from "../state/todos"
import { useRecoilState } from "recoil"

const TodoFilters = (props) => {
    const [filter, setFilter] = useRecoilState(todoListFilter)

    const onChange = (e) => {
        setFilter(filters[e.target.value])
    }

    return (
        <div className="filters">
            Show :
            <div>
                {Object.values(filters).map((f) => (
                    <div key={f.value} className="filter">
                        <input
                            name="todo-list-filter"
                            type="radio"
                            checked={f.value === filter.value}
                            value={f.value}
                            onChange={onChange}
                        />
                        <label htmlFor={f.value}>{f.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoFilters
