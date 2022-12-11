/*
  These svg components will be loaded and rendered async and dynamically based on the given key.
 */
import { defineAsyncComponent } from "vue";

export const iconsMap = {
  "sort-up": defineAsyncComponent(
    () => import("../components/icons/sort-up.vue")
  ),
  "down-arrow": defineAsyncComponent(
    () => import("../components/icons/down-arrow.vue")
  ),
  "up-arrow": defineAsyncComponent(
    () => import("../components/icons/up-arrow.vue")
  ),
  "sort-down": defineAsyncComponent(
    () => import("../components/icons/sort-down.vue")
  ),
  search: defineAsyncComponent(() => import("../components/icons/search.vue")),
  // Add more async svg icons components here as needed.
};
