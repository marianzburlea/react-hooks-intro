// I want to build a function that returns an array 
// with N + 1 elements that are random and integers
export const getListOfDuplicatesUsingObject = (n = 10000) => {
  let length = n + 1,
      i = 0,
      o = {};
  for(i; i < length; i++) {
    const value = ~~(Math.random() * n) + 1;
    if (o.hasOwnProperty(value)) {
      o[value]++;
    } else {
      o[value] = 1;
    }
  }

  const uniqueValues = Object.keys(o);

  // Check for duplicates
  if (n < 1) {
    return 'We need at least two numbers to be generated to ensure we have one duplicate pair';
  }

  // In practice, the real world, I've never got less than 3 - 4 repeatable values
  // when n was 25 or more, so let's only check for small values
  if (n < 25) {
    const onlyOneTimeRepeatableValues = uniqueValues.filter(key => o[key] === 1);
    // in case no duplicates are present
    // upon further investigation this code can not happen as even if the
    // generator outputs unique values, it runs out of posibilities before
    // the last element is generated therefore one that repeats will be generated
    if (onlyOneTimeRepeatableValues.length === uniqueValues.length) {
      // increase the first value repeat count by 1
      o[uniqueValues[0]]++;
      // remove a random value but the first one
      delete o[uniqueValues[~~(Math.random() * uniqueValues.length - 1) + 1]];
    }
  }
  
  console.log(o);
  return uniqueValues.filter(key => o[key] > 1);
}