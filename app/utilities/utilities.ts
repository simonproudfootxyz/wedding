export const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
