<script setup lang="ts">
import {useLocalStorage} from "@vueuse/core";

const x = useLocalStorage("x", 0)
</script>

<template>
  <UCard>
    <template #header>
      Welcome to nuxt-template example
    </template>
    <UInput v-model="x"/>
    <template #footer>
      <UTooltip text="Uses localstorage">
        <UButton label="Click me" @click="x+=1"/>
      </UTooltip>
    </template>
  </UCard>
</template>

<style scoped>

</style>