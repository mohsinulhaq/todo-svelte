import { writable } from 'svelte/store'

const store = writable({
  todos: []
})

export default store
