# Svelte persistent store
Installation
```Bash
npm i -D svelte-persist
```
Example use
```Html
<p>{$count}</p>
<button on:click={() => ($count += 1)}>+</button>
<button on:click={() => ($count = 0)}>reset</button>

<script>
  import persist from 'svelte-persist'
  
  /* when 0 - default value */
  const count = persist('someVariableName', 0)
</script>
```
Then you can reload page for testing
