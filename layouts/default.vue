<script setup lang="ts">
const colorMode = useColorMode()
const toggleDarkMode = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark"
}
</script>

<template>
  <header class="py-2 px-4 bg-gray-50 dark:bg-gray-900">
    <UButton label="Change theme" icon="i-heroicons-cog" @click="toggleDarkMode"/>
  </header>
  <UContainer class="p-2">
    <NuxtPage/>
  </UContainer>
</template>

<style scoped>

</style>