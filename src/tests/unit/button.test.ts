import { mount } from "@vue/test-utils";
import Button from "../../components/Button.vue";
import { describe, expect } from "vitest";

describe("Button", () => {
  test("renders the correct classes based on the state prop", () => {
    const defaultButton = mount(Button, {
      propsData: { state: "default" },
    });

    //check if the classes method on the mounted component returns the expected array of CSS class names for the default state of the button.
    expect(defaultButton.classes()).toEqual([
      "p-2",
      "text-sm",
      "rounded-lg",
      "font-medium",
      "focus:outline-none",
      "focus:ring-4",
      "text-gray-900",
      "bg-white",
      "border",
      "border-gray-200",
      "hover:bg-gray-100",
      "hover:text-blue-700",
      "focus:z-10",
      "focus:ring-gray-200",
      "dark:focus:ring-gray-700",
      "dark:bg-gray-800",
      "dark:text-gray-400",
      "dark:border-gray-600",
      "dark:hover:text-white",
      "dark:hover:bg-gray-700",
    ]);

    const activeButton = mount(Button, {
      propsData: { state: "active" },
    });

    // check if the classes method on the mounted component returns the expected array of CSS class names for the active state of the button.
    expect(activeButton.classes()).toEqual([
      "p-2",
      "text-sm",
      "rounded-lg",
      "font-medium",
      "focus:outline-none",
      "focus:ring-4",
      "text-white",
      "bg-gray-800",
      "hover:bg-gray-900",
      "focus:ring-gray-300",
      "dark:bg-gray-800",
      "dark:hover:bg-gray-700",
      "dark:focus:ring-gray-700",
      "dark:border-gray-700",
    ]);
  });

  test("renders the correct label", () => {
    const wrapper = mount(Button, {
      propsData: {
        label: "Click me",
      },
    });
    // check if button element returns the expected label.
    expect(wrapper.find("button").text()).toBe("Click me");
  });

  test("renders the svg icon", () => {
    const wrapper = mount(Button, {
      props: {
        icon: "search",
      },
    });
    // check if the mounted component renders async svg component.
    expect(wrapper.find("svg").exists()).toBe(true);
  });
});
