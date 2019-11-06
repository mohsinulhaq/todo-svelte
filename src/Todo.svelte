<script>
    export let todo;
    export let removeTodo;
</script>

<style>
    .remove-todo {
        color: red;
    }
</style>

<li class="todo">{todo} <span class="remove-todo" on:click={removeTodo}>x</span></li>
