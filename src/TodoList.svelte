<script>
    import Todo from './Todo.svelte'
    export let todos = []
    export let removeTodo
</script>

<style>
    ul {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-inline-start: 0;
    }
</style>

<ul>
{#each todos as todo (todo.id)}
    <Todo todo={todo.text} removeTodo={() => removeTodo(todo.id)} />
{/each}
</ul>
