export const isAscending = (arr: number[]) => {
  if (!Array.isArray(arr) || arr.length < 2 || arr.some(isNaN)) {
    return false;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] < arr[i]) {
      return false;
    }
  }
  return true;
};
