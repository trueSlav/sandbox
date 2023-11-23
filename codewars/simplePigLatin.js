//Закончить вариант с знаками пунктуации

let str = 'Hello world ? !';

let mas = str.split(' ');
let res = []

// mas.forEach((word, i) => {

// 	let nWord = word.split('');
// 	let letter = nWord.shift();
	

// 	nWord.push(letter);
// 	nWord = nWord.join('') + 'ay'

// 	res.push(nWord)
	
// });
// console.log(mas);
for(let i = 0; i < mas.length; i++){

	let nWord = mas[i].split('');
	let letter = nWord.shift();
	nWord.push(letter);

	if(mas[i] !== '!' && mas[i] !== '?'){
		
		nWord = nWord.join('') + 'ay';

	} 
	
	res.push(nWord);

}

res = res.join(' ')
console.log(res);

// igPay atinlay siay oolcay
// elloHay orldway !

// CD version:
function pigIt(str){
  
  let mas = str.split(' ');
  let res = []

  for(let i = 0; i < mas.length; i++){

    let nWord = mas[i].split('');
    let letter = nWord.shift();
    nWord.push(letter);

    if(mas[i] !== '!' && mas[i] !== '?'){

      nWord = nWord.join('') + 'ay';

    } 

    res.push(nWord);

  }

  res = res.join(' ');
  return res;
}

//Человеческий вариант через регулярку: 
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}