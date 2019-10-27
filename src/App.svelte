<script>
	import store from './store'
	import TodoInput from './TodoInput.svelte'
	import TodoList from './TodoList.svelte'

	let currentTodo = ''
	function addTodo() {
		if (!currentTodo) {
			return
		}
		store.update(state => ({
			...state,
			todos: state.todos.concat(currentTodo)
		}))
		currentTodo = ''
	}
</script>

<style>
	:global(body) {
		text-align: center;
	}
</style>

<TodoInput bind:todo={currentTodo} onAddTodo={addTodo} />
<TodoList />
