import { atom, selector } from "recoil"

export const todoList = atom({
    key: "todo-list",
    default: [],
})
