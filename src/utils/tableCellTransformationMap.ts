import { isoStringToFormatDate } from "../utils/dateUtils";

// The transformMap object contains a mapping of keys to transformation functions.
export const transformationMap = {
  date: isoStringToFormatDate,
  // Add more transformation functions here as needed.
};
