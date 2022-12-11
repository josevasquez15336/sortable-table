// Filters are removed from Vue 3.0 and are no longer supported
// define the isoStringToFormatDate function to convert ISO-formatted date strings into a more readable date format.

const formatDate = (date: Date) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  } as const;

  return date.toLocaleString("en-US", options); // Output: December 7, 2022 at 12:34 PM
};

export const isoStringToFormatDate = (isoString: string | number | Date) => {
  const localeDate = new Date(isoString);
  return formatDate(localeDate);
};
