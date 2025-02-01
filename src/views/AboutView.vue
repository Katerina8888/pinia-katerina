<template>
  <div class="about"></div>
  <h1>About</h1>
  <button class="mx-auto flex border p-2" @click="storeCounter.increaseCount">
    {{ storeCounter.count }}
  </button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>
