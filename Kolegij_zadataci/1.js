const getRangeValue = input => {
  const returnValues = ["a", "b", "c", "d", "e"];
  const rangeValues = [0, 10, 25, 35];

  function _isInRange(start, end) {
    const thisStart = typeof start == "number" ? start : -Infinity;
    const thisEnd = typeof end == "number" ? end : Infinity;
    return input >= thisStart && input < thisEnd;
  }

  return returnValues.find((item, index) =>
    _isInRange(rangeValues[index - 1], rangeValues[index])
  );
};

console.log(getRangeValue(0));
