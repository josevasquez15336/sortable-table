<template>
  <ul
    ref="componentRef"
    class="z-20 flex flex-col max-w-xs overflow-hidden divide-y divide-gray-200 rounded-md ring-1 ring-inset ring-gray-200/30 bg-opacity-30 backdrop-filter backdrop-blur-sm drop-shadow-lg dark:divide-gray-700"
  >
    <li class="bg-slate-900">
      <div class="flex items-center justify-between p-2">
        <slot name="heading" />
      </div>
    </li>
    <li>
      <div class="flex items-center justify-between p-2">
        <slot name="ascending" />
      </div>
    </li>
    <li>
      <div class="flex items-center justify-between p-2">
        <slot name="descending" />
      </div>
    </li>
    <li v-if="hasFilter">
      <div class="flex items-center justify-between p-2">
        <slot name="filter" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useDetectOutsideClick from "../composables/useDetectOutsideClick";
const emit = defineEmits(["close"]);
defineProps({
  hasFilter: {
    type: Boolean,
    default: false,
  },
});

const componentRef = ref<null | HTMLUListElement>(null);
useDetectOutsideClick(componentRef, () => emit("close"));
</script>
