import { mount } from "@vue/test-utils";
import DropDownMenu from "src/components/DropDownMenu.vue";
import { describe, expect } from "vitest";

describe("Button", () => {
  it("should render the slot content correctly", async () => {
    const wrapper = mount(DropDownMenu, {
      slots: {
        heading: "<h1>Heading</h1>",
        ascending: "<p>Ascending</p>",
        descending: "<p>Descending</p>",
      },
    });
    // Check that the rendered content matches the expected slot content
    expect(wrapper.find("h1").text()).toBe("Heading");
    expect(wrapper.findAll("p").at(0)!.text()).toBe("Ascending");
    expect(wrapper.findAll("p").at(1)!.text()).toBe("Descending");
  });

  it("renders the filter slot when `hasFilter` is true", () => {
    const wrapper = mount(DropDownMenu, {
      props: {
        hasFilter: true,
      },
      slots: {
        filter: '<div class="filter-slot">Filter Slot</div>',
      },
    });
    // Check that the filter slot is rendered as the fourth list item in the DropDownMenu
    expect(wrapper.findAll("li")).toHaveLength(4);
    expect(wrapper.findAll("li").at(3)!.text()).toBe("Filter Slot");
  });
});
