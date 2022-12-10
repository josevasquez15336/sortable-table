<template>
  <div class="w-screen h-screen p-8 overflow-auto bg-slate-600">
    <Table :columns="tableColumns" :table-data="tableData" />
  </div>
</template>

<script lang="ts" setup>
import { computed, Ref } from "vue";
import Table from "../components/Table.vue";
import { useFetch } from "../composables/useFetch";
import { Baremetrics, FeatureEditionsItem } from "../types/Metrics";
import { TableColumn } from "../types/Table";

// Define the tableColumns array that contains the column definitions for the table.
const tableColumns: TableColumn[] = [
  {
    label: "Name",
    field: "name",
    hasFilter: false,
    transformValue: "none",
  },
  {
    label: "Descriptions",
    field: "description",
    hasFilter: false,
    transformValue: "none",
  },
  {
    label: "Editions",
    field: "editions",
    hasFilter: true,
    transformValue: "none",
  },
  {
    label: "Time of Screenshot",
    field: "timeOfScreenshot",
    hasFilter: false,
    transformValue: "date",
  },
];

const apiUrl = "https://content.launchbrightly.com/lbdemo/baremetrics.json";
const { data }: { data: Ref<Baremetrics | null> } = useFetch(apiUrl);

// Use a computed property to map the API data to the format expected by the Table component.
const tableData = computed(() => {
  const getEditions = (editions: FeatureEditionsItem[]) => {
    let stringValue = "";
    editions.forEach((item) => {
      const name = item.edition.name;
      stringValue =
        stringValue + (stringValue.length ? `, ${name}` : `${name}`);
    });
    return stringValue;
  };

  if (data.value) {
    return data.value.features.items.map((row) => ({
      name: row.name,
      description: row.description,
      editions: getEditions(row.FeatureEditions.items),
      timeOfScreenshot: row.timeOfScreenshot,
    }));
  }
  return [];
});
</script>
