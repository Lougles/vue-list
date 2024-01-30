import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Todo {
  id: number,
  name: string,
  completed: boolean
}
export const useTodoListStore = defineStore('list', () => {
  const todos = ref([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false }
  ])
  function add(name: string): void {
    const newTodo: Todo = {id: Date.now(), name: name, completed: false}
    todos.value.push(newTodo);
  }

  return { todos, add }
})
