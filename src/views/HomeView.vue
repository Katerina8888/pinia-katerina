<template>
  <div class="home text-center font-bold">
    <div class="count text-3xl">{{ storeCounter.count }}</div>
    <div class="buttons">
      <button @click="storeCounter.decreaseCount" class="text-2xl m-4 border w-8 h-12">-</button>
      <button @click="storeCounter.increaseCount" class="text-2xl m-4 border w-8 h-12">+</button>
    </div>
  </div>
  <hr />
  <div>The counter is: {{ oddOrEven }}</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

const count = ref(0)

const oddOrEven = computed(() => {
  if (count.value % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})
</script>
