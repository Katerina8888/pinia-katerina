import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  // actions
  const increaseCount = () => count.value++
  const decreaseCount = () => count.value--
  return {
    // state
    count,
    // actions
    increaseCount,
    decreaseCount,
  }
})
