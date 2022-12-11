<template>
  <table
    class="w-full max-w-5xl min-h-full mx-auto text-sm text-left text-gray-500 bg-gray-800 table-auto dark:text-gray-400 rounded-xl"
  >
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th v-for="column in columns" :key="column.field" class="px-4 py-2">
          <div class="relative flex items-center">
            {{ column.label }}
            <Button
              @click="menuOpenByFieldID = column.field"
              class="min-w-[32px] min-h-[24px] max-w-[32px] max-h-[32px] ml-2"
              id="open-menu"
              :icon="'down-arrow'"
            >
            </Button>
            <Transition name="bounce">
              <DropDownMenu
                v-if="menuOpenByFieldID === column.field"
                :has-filter="column.hasFilter"
                @close="menuOpenByFieldID = ''"
                class="absolute top-0 left-0"
              >
                <template #heading>
                  {{ column.label }}
                  <Button
                    class="min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] ml-2"
                    state="active"
                    @click="menuOpenByFieldID = ''"
                    :icon="'up-arrow'"
                  ></Button>
                </template>
                <template #ascending>
                  Sort ascending
                  <Button
                    @click="
                      sortedBy = { field: column.field, desc: false };
                      menuOpenByFieldID = '';
                    "
                    class="min-w-[32px] min-h-[24px] max-w-[32px] max-h-[32px] ml-2"
                    id="sort-ascending-button"
                    :icon="'sort-up'"
                  ></Button>
                </template>
                <template #descending>
                  Sort descending
                  <Button
                    class="min-w-[32px] min-h-[24px] max-w-[32px] max-h-[32px] ml-2"
                    @click="
                      sortedBy = { field: column.field, desc: true };
                      menuOpenByFieldID = '';
                    "
                    id="sort-descending-button"
                    :icon="'sort-down'"
                  ></Button>
                </template>
                <template #filter>
                  <SearchBar
                    @searching="filteredBy.field = column.field"
                    v-model:input="filteredBy.value"
                    :placeholder="`Search for ${column.label}`"
                    :status="filteredBy.status"
                  />
                </template>
              </DropDownMenu>
            </Transition>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        v-for="row in filteredColumns"
        :key="row.id"
      >
        <td v-for="column in columns" :key="column.field" class="px-4 py-2">
          {{
            column.transformValue !== "none"
              ? handleTransform(row[column.field], column.transformValue)
              : row[column.field]
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from "vue";
import { isoStringToFormatDate } from "../utils/dateUtils";
import { TableColumn } from "../types/Table";
import Button from "./Button.vue";
import DropDownMenu from "./DropDownMenu.vue";
import SearchBar from "./SearchBar.vue";
import { SearchBarStatus } from "../types/SearchBar";

const props = defineProps({
  columns: {
    type: Array as PropType<TableColumn[]>,
    required: true,
  },
  tableData: {
    type: Array as PropType<Record<string, number | string>[]>,
    required: true,
  },
});

const menuOpenByFieldID = ref("");

const sortedBy = ref({ field: "", desc: false });
const filteredBy = ref<{
  field: string;
  value: string;
  status: SearchBarStatus;
}>({ field: "", value: "", status: "active" });

// Use a computed property to sort the table data by the current sorting state.
const sortedColumns = computed(() => {
  let columns = props.tableData;
  const { field, desc } = sortedBy.value;
  if (props.tableData && field) {
    columns = desc
      ? props.tableData.sort((a, b) => {
          const aVal = a[field];
          const bVal = b[field];
          if (typeof aVal === "number" && typeof bVal === "number")
            return bVal - aVal;
          else if (typeof aVal === "string" && typeof bVal === "string")
            return bVal.localeCompare(aVal);
          return 1;
        })
      : props.tableData.sort((a, b) => {
          const aVal = a[field];
          const bVal = b[field];
          if (typeof aVal === "number" && typeof bVal === "number")
            return aVal - bVal;
          else if (typeof aVal === "string" && typeof bVal === "string")
            return aVal.localeCompare(bVal);
          return 1;
        });
  }

  return columns;
});

// Use a computed property to filter the sorted table data by the current filtering state.
const filteredColumns = computed(() => {
  //let columns = sortedColumns.value;
  const { field, value } = filteredBy.value;
  if (field && value) {
    const filteredColumns = sortedColumns.value.filter((item) => {
      let fieldValue = item[field];
      if (typeof fieldValue === "number") {
        fieldValue = fieldValue.toString();
      }
      return fieldValue.toLowerCase().includes(value.toLowerCase());
    });

    if (filteredColumns.length === 0) {
      filteredBy.value.status = "errored";
      return sortedColumns.value;
    }
    filteredBy.value.status = "active";
    return filteredColumns;
  }
  filteredBy.value.status = "active";
  return sortedColumns.value;
});

// Define a function to apply the appropriate transformation to a table cell value based on the transform key.
const handleTransform = (value: any, transformKey: "date") => {
  const transformMap = {
    date: isoStringToFormatDate,
  };
  return transformMap[transformKey](value);
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
