<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="relative mt-1">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <Icon
          icon="search"
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
        ></Icon>
      </div>
      <input
        type="search"
        id="search-input"
        :value="input"
        @input="handleInputChange"
        class="block w-64 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Icon from "./Icon.vue";
defineProps({
  placeholder: {
    type: String,
    default: "Search for items",
  },
  input: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:input", "searching"]);
const handleInputChange = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value;
  emit("update:input", inputValue);
  if (inputValue) emit("searching");
};
</script>
