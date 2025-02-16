function hasTargetSum(array, target) {
	for (let i = 0; i < array.length; i++) {
		const complement = target - array[i];
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] === complement) return true;
		}
	}
	return false;
}

function hasTargetSum(array, target) {

	const seenNumbers = {};

	for (const number of array) {

		const complement = target - number;
	
		if (seenNumbers[complement]) return true;

		seenNumbers[number] = true;
	}
	
	return false;
}


function hasTargetSum(array, target) {
	const seenNumbers = new Set(); 
	for (const number of array) {
		const complement = target - number;

		
		if (seenNumbers.has(complement)) return true;

	
		seenNumbers.add(number);
	}
	return false;
}
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
