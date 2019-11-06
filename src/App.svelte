<script>
	import uuid from 'uuid/v4'
	import store from './store'
	import TodoInput from './TodoInput.svelte'
	import TodoList from './TodoList.svelte'

	let currentTodo = ''
	function addTodo() {
		if (!currentTodo) {
			return
		}
		store.update(todos => todos.concat({ id: uuid(), text: currentTodo}))
		currentTodo = ''
	}

	function removeTodo(id) {
		store.update(todos => todos.filter(todo => todo.id !== id))
	}
</script>

<style>
	:global(body) {
		text-align: center;
	}
</style>

<TodoInput bind:todo={currentTodo} onAddTodo={addTodo} />
<TodoList todos={$store} {removeTodo} />
