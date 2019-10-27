<script>
    export let todo, onAddTodo
</script>

<div><textarea bind:value={todo} placeholder="What to do?"></textarea></div>
<button on:click={onAddTodo}>Add</button>
