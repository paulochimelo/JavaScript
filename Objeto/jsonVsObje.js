const obj = { a: 1, b:2, c:3, d:4, soma(){return a+b+c+d} }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a: 1, b: 2, C: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "C": 3 }'))
console.log(JSON.parse('{ "a": 1, "b": true, "c": {}, "d": [] }'))
