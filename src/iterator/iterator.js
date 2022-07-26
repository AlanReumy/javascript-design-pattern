export const each = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn.call(arr[i], i, arr[i]);
  }
};
