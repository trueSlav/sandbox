multiplicationTable = function(size) {
  
  let res = [];
  
  for(let i = 1; i <= size; i++){

		let x = [];

		for(let j = 1; j <= size ; j++){

			x.push(i*j);

    }
		res.push(x);
  }

	return res;
}

console.log(multiplicationTable(2));
