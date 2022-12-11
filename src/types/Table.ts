import { transformationMap } from "../utils/tableCellTransformationMap";
export interface TableColumn {
  label: string;
  field: string;
  hasFilter: boolean;
  transformValue: "date" | "none";
}

export type TableCell = string | number | Date;
export type TableCellTransformation = keyof typeof transformationMap;
