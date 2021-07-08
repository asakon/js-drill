// 書き写してお勉強
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// arr.some(callback(element))

// some() は、与えられた callback 関数を、配列に含まれる各要素に対して一度ずつ、callback が真と解釈される値 (論理型に変換した際に真となる値) を返す要素が見つかるまで呼び出します。そのような要素が見つかると、some() はただちに true を返します

const fruits = ['banana', 'apple', 'grape', 'watermelon'];

function checkAvailability(arr, val) {
	return arr.some(arrVal => val === arrVal);
}

console.log(checkAvailability(fruits, 'apple'));