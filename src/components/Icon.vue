<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    style="fill: currentColor"
  >
    <component :is="iconsMap[props.icon]" />
  </svg>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import { iconsMap } from "../utils/iconsMap";
import { Icons } from "../types/Icons";
/* Use the iconsMap object to async render the appropriate SVG icon based on the icon prop value.*/
const props = defineProps({
  icon: {
    type: String as PropType<Icons>,
    required: true,
  },
});
</script>
