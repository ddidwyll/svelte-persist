import { writable } from 'svelte/store'
import { tick } from 'svelte'

const persist = (name, value) => {
  const stored = localStorage.getItem(name)
  value = writable(!stored ? value : JSON.parse(stored))
  value.subscribe(value => {
    if (value !== undefined) {
      localStorage.setItem(name, JSON.stringify(value))
    }
  })
  return value
}

export const deferred = (name, value) => {
  const { subscribe, set, update } = persist(name, value)
  return {
    subscribe,
    set: (value) => tick().then(() => set(value)),
    update: (value) => tick().then(() => update(value))
  }
}

export const debounced = (name, value, delay = 300) => {
  const { subscribe, set } = persist(name, value)
  let query = null, count = null
  const debounce = value => {
    if (value !== undefined) query = value
    if (count) return
    count = setTimeout(() => {
      set(query)
      count = null
    }, delay)
  }
  return { subscribe, set: debounce }
}

export default persist
