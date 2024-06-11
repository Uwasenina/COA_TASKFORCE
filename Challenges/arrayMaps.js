
function findSubarrayWithSum(nums, targetSum) {
  let sumSoFar = 0; 
  let startIndex = 0; 

  for (let endIndex = 0; endIndex < nums.length; endIndex++) {
    sumSoFar += nums[endIndex]; 

    while (sumSoFar > targetSum && startIndex <= endIndex) {
      sumSoFar -= nums[startIndex]; 
      startIndex++; 
    } 

    if (sumSoFar === targetSum) {
      return true; 
    }
  }

  return false; 
}

function runTestCase(nums, targetSum, expectedResult) {
  const result = findSubarrayWithSum(nums, targetSum); 
  console.log(
    `Input: nums = ${JSON.stringify(nums)}, targetSum = ${targetSum}`
  );
  console.log(`Expected: ${expectedResult}, Actual: ${result}`);
  console.log(result === expectedResult ? "✅ Test Passed" : "❌ Test Failed");
  console.log("");
}

const testCases = [
  {
    nums: [4, 2, 7, 1, 9, 5],
    targetSum: 14,
    expectedResult: true, 
  },
  {
    nums: [1, 2, 3, 4, 5],
    targetSum: 9,
    expectedResult: true, 
  },
  {
    nums: [1, 2, 3, 4, 5],
    targetSum: 15,
    expectedResult: true, 
  },
  {
    nums: [1, 2, 3, 4, 5],
    targetSum: 16,
    expectedResult: false, 
  },
  {
    nums: [0, 0, 0, 0],
    targetSum: 0,
    expectedResult: true, 
  },
  {
    nums: [5],
    targetSum: 10,
    expectedResult: false, 
  },
  {
    nums: [5, -3, 2, 3, 1],
    targetSum: 5,
    expectedResult: true, 
  },
  {
    nums: [1, -1, 1, -1, 1, -1],
    targetSum: 0,
    expectedResult: true, 
  },
];


testCases.forEach((test, index) => {
  console.log(`Test Case ${index + 1}:`);
  runTestCase(test.nums, test.targetSum, test.expectedResult);
});
