import { ref } from "vue";

export const useFetch = (url: string) => {
  // Define a reactive property to store the fetched data on a vue compaosable
  const data = ref(null);
  const error = ref(null);
  // Use the fetch function to retrieve data from an API endpoint

  (async () => {
    const res = await fetch(url);
    data.value = await res.json();
  })().catch((err) => {
    error.value = err;
  });

  return { data, error };
};
