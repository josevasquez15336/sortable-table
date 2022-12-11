<template>
  <div class="relative bg-transparent">
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
      :class="`block w-64 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-transparent dark:border-gray-400 dark:placeholder-gray-400 dark:text-white ${searchBarStatusClasses[status]}`"
      :placeholder="placeholder"
    />
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import Icon from "./Icon.vue";
import { searchBarStatusClasses } from "../utils/searchBarStatusMap";
import { SearchBarStatus } from "../types/SearchBar";
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
