Array.zip = function(...arrs) {
  var counter,
    results = [],
    combinerFunction = arrs.pop(),
    minLength = Math.min(...arrs.map(arr => arr.length));
  for (counter = 0; counter < minLength; counter++) {
    results.push(combinerFunction(left[counter], right[counter]));
  }

  return results;
};
