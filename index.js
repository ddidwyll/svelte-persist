import { writable } from 'svelte/store'

export default (name, value) => {
  const stored = localStorage.getItem(name)
  value = writable(!stored ? value : JSON.parse(stored))
  value.subscribe(value => {
    if (value !== undefined) localStorage.setItem(name, JSON.stringify(value))
  })
  return value
}
