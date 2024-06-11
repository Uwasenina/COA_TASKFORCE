function transformString(str) {
  let result = str; 


  if (str.length % 3 === 0) {
    result = result.split("").reverse().join("");
  }

  if (str.length % 5 === 0) {
    result = result
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  return result; 
}

const testCases = [
  { input: "abcabcabc", expected: "cbacbacba" },

  { input: "hello", expected: "104 101 108 108 111" },

  { input: "abcdef", expected: "fedcba" },

  {
    input: "Hello World!!!!",
    expected: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72",
  },
];

function runTestCase(input, expected) {
  const output = transformString(input); 
  console.log(`Input: "${input}"`);
  console.log(`Expected Output: "${expected}"`);
  console.log(`Actual Output: "${output}"`);
  console.log(output === expected ? "✅ Test Passed" : "❌ Test Failed");
  console.log("");
}

// Run and print results for each test case
testCases.forEach((test, index) => {
  console.log(`Test Case ${index + 1}:`);
  console.log(`Length of input "${test.input}" is ${test.input.length}`);
  runTestCase(test.input, test.expected);
});

const inputExample = "Hello World!!!!";
console.log(`Example usage with input "${inputExample}":`);
console.log(transformString(inputExample));

// Output: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72"
