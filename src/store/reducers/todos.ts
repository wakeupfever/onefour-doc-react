interface TodoItem {
  id: string
  completed: boolean
  text: string
}

interface Action {
  type: string
  id: string
  text: string
}

const todos = (state: TodoItem[] = [], action: Action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ]
  case 'TOGGLE_TODO':
    return state.map(todo =>
      (todo.id === action.id)
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  default:
    return state
  }
}

export default todos