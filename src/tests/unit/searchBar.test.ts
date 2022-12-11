import { shallowMount } from "@vue/test-utils";
import SearchBar from "../../components/SearchBar.vue";
import Icon from "../../components/Icon.vue";
import { describe, expect } from "vitest";
import { nextTick } from "vue";

describe("SearchBar", () => {
  test("renders the correct placeholder text", () => {
    const wrapper = shallowMount(SearchBar);

    // Check if the correct placeholder text is rendered
    expect(wrapper.find('input[type="search"]').attributes("placeholder")).toBe(
      "Search for items"
    );
  });

  test("renders the correct initial input value", () => {
    const wrapper = shallowMount(SearchBar);

    // Check if the input has the correct initial value
    expect(wrapper.find('input[type="search"]').element.value).toBe("");
  });

  test("renders the correct SVG icon", () => {
    const wrapper = shallowMount(SearchBar);

    // Check if the correct SVG icon is rendered
    expect(wrapper.findComponent(Icon).props("icon")).toBe("search");
  });

  test("updates the input value when the input is changed", async () => {
    const wrapper = shallowMount(SearchBar);
    const input = wrapper.find('input[type="search"]');

    // Type "hello" into the input
    input.setValue("hello");

    // Wait for the input to be updated
    await nextTick();

    // Check if the input value has been updated
    expect(input.element.value).toBe("hello");
  });

  it('emits the "update:input" event when the input is changed', async () => {
    const wrapper = shallowMount(SearchBar);
    const input = wrapper.find('input[type="search"]');

    // Type "hello" into the input
    input.setValue("hello");

    // Wait for the input to be updated
    await wrapper.vm.$nextTick();

    // Check if the "update:input" event has been emitted
    expect(wrapper.emitted("update:input")).toEqual([["hello"]]);
  });

  it('emits a "searching" event when the search input has a value', () => {
    const wrapper = shallowMount(SearchBar);

    // Set the value of the search input
    wrapper.find("#search-input").setValue("test");

    // Check if the component emitted the "searching" event
    expect(wrapper.emitted().searching).toBeTruthy();
  });
});
