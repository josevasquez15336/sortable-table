<template>
  <!-- <div class=""> -->
  <div class="w-screen h-screen p-8 overflow-auto bg-slate-900">
    <table
      v-if="data"
      class="w-full max-w-5xl mx-auto overflow-hidden text-sm text-left text-gray-500 table-auto dark:text-gray-400 rounded-xl"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Edition(s)</th>
          <th class="px-4 py-2">Time of Screenshot</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="feature in features"
          :key="feature.id"
        >
          <td class="px-4 py-2">{{ feature.name }}</td>
          <td class="px-4 py-2">{{ feature.description }}</td>
          <td class="px-4 py-2">
            <span
              v-for="edition in feature.FeatureEditions.items"
              :key="edition.edition.id"
            >
              {{ edition.edition.name }}
            </span>
          </td>
          <td class="px-4 py-2">{{ feature.timeOfScreenshot }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
interface Metrics {
  id: string;
  name: string;
  tagline: string;
  description: string | null;
  URL: string;
  modeDesktopLight: boolean;
  modeDesktopDark: boolean;
  modeMobileLight: boolean;
  modeMobileDark: boolean;
  editions: {
    items: {
      id: string;
      name: string;
      description: string;
    }[];
  };
  features: {
    items: {
      id: string;
      name: string;
      description: string;
      URL: string;
      selector: string;
      takeScreenshot: boolean;
      timeOfScreenshot: string;
      filename: string;
      filepathDesktopLight: string;
      filepathDesktopDark: string | null;
      filepathMobileLight: string | null;
      filepathMobileDark: string | null;
      FeatureEditions: {
        items: {
          edition: {
            id: string;
            name: string;
          };
          limit: number | null;
          limitType: string | null;
          constraint: number | null;
          constraintType: string | null;
          speed: number | null;
          speedType: string | null;
        }[];
      };
    }[];
  };
}

// Define a reactive property to store the fetched data
const data = ref<null | Metrics>(null);
const apiUrl = "https://content.launchbrightly.com/lbdemo/baremetrics.json";
const features = computed(() => {
  if (data.value) {
    return data.value.features.items;
  }
  return [];
});

// Use the fetch function to retrieve data from an API endpoint
onMounted(async () => {
  const response = await fetch(apiUrl);
  data.value = (await response.json()) as Metrics;
});
</script>
