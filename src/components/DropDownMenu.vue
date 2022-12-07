<template>
  <ul
    ref="componentRef"
    class="z-20 flex flex-col max-w-xs overflow-hidden divide-y divide-gray-200 drop-shadow-lg bg-slate-900 dark:divide-gray-700 rounded-xl"
  >
    <li>
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
import { ref } from 'vue'
import useDetectOutsideClick from '../composables/useDetectOutsideClick'
const emit = defineEmits(['close'])
defineProps({
  hasFilter: {
    type: Boolean,
    default: false,
  },
})

const componentRef = ref<null | HTMLUListElement>(null)
useDetectOutsideClick(componentRef, () => emit('close'))
</script>
