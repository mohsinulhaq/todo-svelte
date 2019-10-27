<script>
    import store from './store'
    import Todo from './Todo.svelte'
    let todos = []
    store.subscribe(state => todos = state.todos)
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
{#each todos as todo}
    <Todo todo={todo} />
{/each}
</ul>
