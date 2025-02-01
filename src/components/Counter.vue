<template>
  <div class="count text-3xl">{{ storeCounter.count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>
