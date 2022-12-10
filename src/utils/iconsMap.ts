/*
 SVG Vue components; this utility allow extending and async import easily and use SVG  like any other Vue component
 This method includes all of the goodies you get using Vue. For example, defineAsyncComponent would allow tree shake
 if the list is too long, get access to things like props and logic if needed.
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
};

export type Icons = keyof typeof iconsMap;
