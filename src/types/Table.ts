export interface TableColumn {
  label: string;
  field: string;
  hasFilter: boolean;
  transformValue: "date" | "none";
}
