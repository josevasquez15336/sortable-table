<template>
  <button
    type="button"
    :class="`p-2  text-sm rounded-lg font-medium focus:outline-none  focus:ring-4 ${buttonClass}`"
  >
    {{ label }}

    <Icon
      v-if="icon !== 'none'"
      :icon="icon"
      :class="`${label ? 'ml-2' : 'mx-auto'}`"
    />
  </button>
</template>
<script lang="ts" setup>
import { computed, PropType } from "vue";
import { Icons } from "../types/Icons";
import Icon from "./Icon.vue";

//Define a buttonStateClassesMap object that maps button state names to their corresponding CSS class names.

const buttonStateClassesMap = {
  default:
    "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
  active:
    "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
};

const props = defineProps({
  state: {
    type: String as PropType<keyof typeof buttonStateClassesMap>,
    default: "default",
  },
  label: {
    type: String,
    default: "",
  },
  icon: {
    type: String as PropType<Icons | "none">,
    default: "none",
  },
});

// Use a computed property to get the appropriate CSS classes for the button based on the state prop value.
const buttonClass = computed(() => buttonStateClassesMap[props.state]);
</script>
