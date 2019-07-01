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
  
  /* 
    where 0 - default value
    someVariableName - name of localStorage item 
  */
  const count = persist('someVariableName', 0)
</script>
```
```Html
<p>{$text}</p>
<input bind:value={$text} />

<script>
  import persist from 'svelte-persist'
  
  const text = persist('text', '')
</script>
```
Then you can reload page for testing
