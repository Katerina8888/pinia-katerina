<template>
  <div class="home text-center font-bold">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount" class="text-2xl m-4 border w-8 h-12">-</button>
      <button @click="storeCounter.increaseCount" class="text-2xl m-4 border w-8 h-12">+</button>
    </div>
  </div>
  <hr />
  <div>The counter is: {{ storeCounter.oddOrEven }}</div>
  <hr />
  <h3>Edit counter:</h3>
  <input type="number" v-model="storeCounter.count" />
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import Counter from '@/components/Counter.vue'

const storeCounter = useCounterStore()
</script>
