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
        :class="`block w-64 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${searchBarStatusClasses[status]}`"
        :placeholder="placeholder"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import Icon from "./Icon.vue";
import { searchBarStatusClasses } from "../utils/searchBarStatusMap";
import { SearchBarStatus } from "../types/SearchBar";
// export type SearBarStatus = keyof typeof statusClasses;

defineProps({
  placeholder: {
    type: String,
    default: "Search for items",
  },
  input: {
    type: String,
    default: "",
  },
  status: {
    type: String as PropType<SearchBarStatus>,
    default: "active",
  },
});

const emit = defineEmits(["update:input", "searching"]);
const handleInputChange = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value;
  emit("update:input", inputValue);
  if (inputValue) emit("searching");
};
</script>
