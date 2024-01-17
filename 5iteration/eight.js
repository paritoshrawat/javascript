const nums = [1, 2, 3];

const num = nums.reduce((acc, currentval) => {
  console.log(`acc: ${acc} currentvalue : ${currentval}`);
  return acc + currentval;
}, 0);

// 0 is initial val if accumulator doesnot have value then it use initial value

console.log(num);
