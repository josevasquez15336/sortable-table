// Filters are removed from Vue 3.0 and are no longer supported. therefore decided to create a date util to avoid displaying isoString format.

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

export const isoStringToFormatDate = (isoString: string) => {
  const localeDate = new Date(isoString);
  return formatDate(localeDate);
};
