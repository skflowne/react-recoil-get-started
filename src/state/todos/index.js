import { atom, selector } from "recoil"
import { filters, SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from "./filters"

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

export const completedTodoCount = selector({
    key: "completed-todo-count",
    get: ({ get }) => {
        const filter = filters[SHOW_COMPLETED]
        const todos = get(todoList)
        return filter.fn(todos).length
    },
})

export const uncompletedTodoCount = selector({
    key: "uncompleted-todo-count",
    get: ({ get }) => {
        const filter = filters[SHOW_UNCOMPLETED]
        const todos = get(todoList)
        return filter.fn(todos).length
    },
})

export const allTodoCount = selector({
    key: "all-todo-count",
    get: ({ get }) => {
        const todos = get(todoList)
        return todos.length
    },
})

export const todoCompletionPercentage = selector({
    key: "todo-completion-percentage",
    get: ({ get }) => {
        const allCount = get(allTodoCount)
        const completedCount = get(completedTodoCount)

        return completedCount / allCount || 0
    },
})
