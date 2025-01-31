<template>
  <div class="home text-center font-bold">
    <div class="count text-3xl">{{ storeCounter.count }}</div>
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

const storeCounter = useCounterStore()
</script>
