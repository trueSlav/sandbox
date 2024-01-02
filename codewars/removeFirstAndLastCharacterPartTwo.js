function array(s) {
  let m = s.split(',');

	if (m.length > 2) {
		m.shift();
		m.pop();
		return m.join(' ');
	} else {
		return null;
	}

}
console.log(array('1,2,3'));
//2
function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}