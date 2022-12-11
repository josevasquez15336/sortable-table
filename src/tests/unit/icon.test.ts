import { mount } from "@vue/test-utils";
import Icon from "src/components/Icon.vue";
import { nextTick } from "vue";
import { describe, expect } from "vitest";
import { sleep } from "../../utils/sleep";

describe("Icon", () => {
  it("renders the correct SVG icon based on the `icon` prop", async () => {
    // The path of the sort-up icon in SVG format
    const sortUpIconPath =
      '<path d="M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4 2 8h3z"></path>';
    const wrapper = mount(Icon, {
      propsData: {
        icon: "sort-up",
      },
    });

    // Wait for the next tick and a short delay to allow the icon to be rendered

    await nextTick();
    await sleep(300);
    // Check that the rendered SVG element contains the expected icon path
    expect(wrapper.find("svg").html()).toContain(sortUpIconPath);
  });
});
