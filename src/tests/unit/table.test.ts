import { shallowMount, mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Table from "../../components/Table.vue";

describe("Table", () => {
  it("renders the correct number of table rows and columns", () => {
    // Set the columns and tableData props on the Table component
    const columns = [
      {
        field: "id",
        label: "ID",
        transformValue: "none",
        hasFilter: true,
      },
      {
        field: "name",
        label: "Name",
        transformValue: "none",
        hasFilter: true,
      },
    ];
    const tableData = [
      { id: 1, name: "Row 1" },
      { id: 2, name: "Row 2" },
      { id: 3, name: "Row 3" },
    ];
    const wrapper = shallowMount(Table, {
      propsData: { columns, tableData },
    });

    // Check that the table has the correct number of rows
    expect(wrapper.findAll("tbody tr")).toHaveLength(3);

    // Check that the table has the correct number of columns
    expect(wrapper.findAll("th")).toHaveLength(2);
  });

  it("filters the table data when the user enters a search query", async () => {
    // Set the columns and tableData props on the Table component
    const columns = [
      {
        field: "id",
        label: "ID",
        transformValue: "none",
        hasFilter: true,
      },
      {
        field: "name",
        label: "Name",
        transformValue: "none",
        hasFilter: true,
      },
    ];
    const tableData = [
      { id: 1, name: "Row 1" },
      { id: 2, name: "Row 2" },
      { id: 3, name: "Row 3" },
    ];
    const wrapper = mount(Table, {
      propsData: { columns, tableData },
    });

    // Find the button with the id of "open-menu" and trigger a click event to render dropdown menu
    wrapper.find("#open-menu").trigger("click");
    // Wait for the DOM to update after the click event
    await nextTick();

    // Set the value of the search input to "2"
    wrapper.find("#search-input").setValue("2");
    await nextTick();

    // Check if the table data has been filtered based on the search query
    expect(wrapper.vm.filteredColumns).toEqual([{ id: 2, name: "Row 2" }]);
  });

  it("sorts the table data", async () => {
    // Set the columns and tableData props on the Table component
    const columns = [
      {
        field: "id",
        label: "ID",
        transformValue: "none",
        hasFilter: true,
      },
      {
        field: "name",
        label: "Name",
        transformValue: "none",
        hasFilter: true,
      },
    ];
    const tableData = [
      { id: 3, name: "Row 3" },
      { id: 2, name: "Row 2" },
      { id: 1, name: "Row 1" },
    ];

    const wrapper = mount(Table, {
      propsData: { columns, tableData },
    });
    // Find the button with the id of "open-menu" and trigger click event to render dropdown menu
    wrapper.find("#open-menu").trigger("click");
    // Wait for the DOM to update after the click event
    await nextTick();

    // Find the button  with the id of "sort-ascending-button" and trigger click
    wrapper.find("#sort-ascending-button").trigger("click");
    // Wait for the DOM to update after the click event
    await nextTick();

    // Check if the table data has been sorted in ascending order
    expect(wrapper.vm.tableData).toEqual([
      { id: 1, name: "Row 1" },
      { id: 2, name: "Row 2" },
      { id: 3, name: "Row 3" },
    ]);

    // Open the dropdown menu again
    wrapper.find("#open-menu").trigger("click");
    await nextTick();

    // Trigger a click event on the sort-descending-button
    wrapper.find("#sort-descending-button").trigger("click");
    await nextTick();

    // Check if the table data has been sorted in descending order
    expect(wrapper.vm.tableData).toEqual([
      { id: 3, name: "Row 3" },
      { id: 2, name: "Row 2" },
      { id: 1, name: "Row 1" },
    ]);
  });
});
