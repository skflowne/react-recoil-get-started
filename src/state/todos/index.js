import { atom, selector } from "recoil"
import { filters, SHOW_ALL } from "./filters"

console.log("filters", filters)

export const todoList = atom({
    key: "todo-list",
    default: [],
})

export const todoListFilter = atom({
    key: "todo-list-filter",
    default: filters[SHOW_ALL],
})

export const filteredTodoList = selector({
    key: "filtered-todo-list",
    get: ({ get }) => {
        const filter = get(todoListFilter)
        console.log("filter", filter)
        const todos = get(todoList)
        return filter.fn(todos)
    },
})
