<script setup lang="ts">
import {useLocalStorage} from "@vueuse/core";

const x = useLocalStorage("x", 0)
const text = ref<string>("")
const response = ref<any>()

const useFetchExample = async () => {
  const {data} = await useFetch("/api/example", {
    method: "post",
    body: {
      text: text.value
    }
  })
  response.value = data.value
}
</script>

<template>
  <div class="space-y-4">
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
    <UCard>
      <template #header>
        Fetch example
      </template>
      <UInput v-model="text" placeholder="Text you enter will be reversed"/>
      <template #footer>
        <UButton icon="i-heroicons-paper-airplane -rotate-45" label="Send" @click="useFetchExample()"/>
      </template>
    </UCard>
    <UCard v-if="response">
      <template #header>Results</template>
      {{response}}
      <template #footer>
        <small>/api/example.post.ts</small>
      </template>
    </UCard>
  </div>

</template>

<style scoped>

</style>