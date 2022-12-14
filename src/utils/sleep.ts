export const sleep = (ms: number = 300) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
