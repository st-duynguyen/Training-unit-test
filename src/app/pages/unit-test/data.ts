const isAscending = (arr) => {
  return arr.every(function (x, i) {
      return i === 0 || x > arr[i - 1];
  });
};
