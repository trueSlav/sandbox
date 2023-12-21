let aa = {

}

console.log(aa);

// ------------------------------------------------

function bb() {
	
}

bb()
console.log(bb());

// ------------------------------------------------
let obj = {
	"0": 1,
	0: 2
}
console.log(obj["0"] + obj[0]); //4
// ------------------------------------------------
setTimeout(function timeout() {
	console.log('1');
}, 0);

Promise.resolve('2').then(console.log);

console.log('3'); // C : 3,2,1
// ------------------------------------------------
const obj1 = {
	x:10
}
//const obj2 = Object.create(obj1.x);
//const obj2 = obj1.create('x');
//const obj2 = obj1.create({x:10});
const obj2 = Object.create(obj1);

console.log(obj2.x); //D:4
// ------------------------------------------------
// const map = new Map();

// map.set('0', '1');
// map.set('s2', '2s');
// map.set('3s', 's3');

// const arr = [...map.values()];
// const result = arr.map(value => parseInt(value, 10));

// console.log(result); //B : [1, 2, NaN]
// ------------------------------------------------
// var a = 'hello';
// function b() {
// 	console.log(a);
// 	var a = 'world'
// 	console.log(a);
// }
// b(); // D : undefined, world
// ------------------------------------------------
console.log(0 || 1 && 2 || 3); //2
// ------------------------------------------------
const str = 'h2h40h';
const result2 = str
			.split('h') //[ '', '2', '40', '' ]
			.map(s => s + 10) //[ '10', '210', '4010', '10' ]
			.filter(s => s.length < 4);
console.log(result2); //[ '10', '210', '10' ]
// ------------------------------------------------
// let a = 10;
// a.b = 10;
// console.log(a); //10
// ------------------------------------------------
const meetups = [
	{name: 'JavaScript', isActive:true, members:100},
	{name: 'Angular', isActive:true, members:900},
	{name: 'Node', isActive:false, members:600},
	{name: 'React', isActive:true, members:500}
];
const membersOnActiveMeetups = metups => meetups
	.filter(meetup => meetup.isActive)
	.reduce((sum, meetup) => sum + meetup.members, 0);

console.log(membersOnActiveMeetups(meetups)); //1500
// ------------------------------------------------
async function bar() {
	return Promise.resolve(10);
}
async function foo() {}
const res1 = foo();
const res2 = bar();
console.log(res1, res2);
// ------------------------------------------------
const result3 = [5, 7 ,9].slice(1);
result3.pop();
result3.push(4);
console.log(result3); //B : [7, 4]

let abc = ['a', 'b', 'c', 'd', 'e', 'f'];
abc.join('+');
console.log(abc.join('+'));

function qq() {

}
qq.x =10;

console.log(qq.x);

// ------------------------------------------------Tinkoff1
// function canFormString(letters) {
// 	const requiredString = "TINKOFF";

// 	const isPossible = [...new Set(requiredString)].every(char =>
// 			requiredString.split(char).length - 1 <= (letters.split(char).length - 1 || 0)
// 	);

// 	return isPossible ? "Yes" : "No";
// }

// const t = parseInt(prompt("Введите количество тестов:"));

// for (let i = 0; i < t; i++) {
// 	const letters = prompt("Введите набор букв:");
// 	const result = canFormString(letters);
// 	console.log(result);
// }
// ------------------------------------------------Tinkoff2
// function makeСontact(numDevelopers, thresholds) {
// 	thresholds.sort((a, b) => a - b);
// 	let count = 0;

// 	for (let i = 0; i < numDevelopers; i++) {
// 			if (thresholds[i] <= count) {
// 					count++;
// 			}
// 	}

// 	return count === numDevelopers ? "Yes" : "No";
// }

// const t = parseInt(prompt("Введите количество тестов:"));

// for (let i = 0; i < t; i++) {
// 	const numDevelopers = parseInt(prompt("Введите количество разработчиков:"));
// 	const thresholds = prompt("Введите пороги социальности разработчиков (через пробел):").split(" ").map(Number);
// 	const result = makeСontact(numDevelopers, thresholds);
// 	console.log(result);
// }
// ------------------------------------------------Tinkoff3
// function maxRemainingMoney(n, m, prices) {
// 	prices.sort((a, b) => a - b);
// 	let maxRemaining = 0;

// 	for (let i = 0; i < n; i++) {
// 			const remainingMoney = m - prices[i] * (n - i);
// 			maxRemaining = Math.max(maxRemaining, remainingMoney);
// 	}

// 	return maxRemaining;
// }

// const input = prompt("Введите n, m и цены подарков (через пробел):");
// const [n, m, ...prices] = input.split(" ").map(Number);

// const result = maxRemainingMoney(n, m, prices);
// console.log(result);
// ------------------------------------------------Tinkoff5
// let n, q;
// let a = [];

// const input1 = prompt().split(" ").map(Number);
// [n, q] = input1;

// const input2 = prompt().split(" ").map(Number);
// a = input2;

// for (let i = 0; i < q; i++) {
// 	const input = prompt().split(" ").map(Number);
// 	const [type, l, r, k, b, x] = input;

// 	if (type === 1) {
// 		for (let j = l - 1; j < r; j++) {
// 			a[j] += x;
// 		}
// 	} else {
// 		let result = -Infinity;
// 		for (let j = l - 1; j < r; j++) {
// 			const value = Math.min(a[j], k * (j + 1) + b);
// 			result = Math.max(result, value);
// 		}
// 		console.log(result);
// 	}
// }