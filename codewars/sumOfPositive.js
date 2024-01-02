let positiveSum = arr => {
	let res = 0;

	// for (let i = 0; i < arr.length; i++) {
	// 	if(arr[i] > 0){
	// 		res += arr[i];
	// 	}
	// }

	for(el of arr) {
		el > 0 ? res += el : '';
	}

	console.log(res);
}

positiveSum([]);