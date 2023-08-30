const fruit = ['apple','orange','banana'];
console.log(fruit);
console.log(fruit[0],fruit[1],fruit[2]);
console.log(...fruit);

function obj(a,b,c){
  // return {a:a, b:b, c:c};
  return {a,b,c};
}
console.log(obj(fruit));
console.log(obj(...fruit))

