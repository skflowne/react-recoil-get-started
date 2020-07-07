export const SHOW_ALL = "FILTER_SHOW_ALL"
export const SHOW_COMPLETED = "FILTER_SHOW_COMPLETED"
export const SHOW_UNCOMPLETED = "FILTER_SHOW_UNCOMPLETED"
export const filters = {
    [SHOW_ALL]: {
        value: SHOW_ALL,
        label: "All",
        fn: (todos) => todos,
    },
    [SHOW_COMPLETED]: {
        value: SHOW_COMPLETED,
        label: "Completed",
        fn: (todos) => todos.filter((t) => t.isComplete),
    },
    [SHOW_UNCOMPLETED]: {
        value: SHOW_UNCOMPLETED,
        label: "Uncompleted",
        fn: (todos) => todos.filter((t) => !t.isComplete),
    },
}
