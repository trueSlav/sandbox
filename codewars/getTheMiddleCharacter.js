function getMiddle(s) {
  let len = s.length,
			mid = len/2;

	if ((len % 2) > 0){
		return s[parseInt(mid)];
	} else {
		return s[parseInt(mid)-1]+s[parseInt(mid)];
	}
}

console.log(getMiddle('a'));
