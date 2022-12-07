import { ref } from "vue";

export const useFetch = (url: string) => {
  // Define a reactive property to store the fetched data on a vue compaosable
  const data = ref(null);
  const error = ref(null);

  // Use the fetch function to retrieve data from an API endpoint
  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
};
