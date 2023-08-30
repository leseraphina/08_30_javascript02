const num ={
  a1: 10,
  a2: 20,
  a3:30
}
console.log(num);

const {a1,a2,a3} = num ;
// console.log(a2);

const num2 ={
  b1: 10,
  b2: 20,
  b3: 30
}
const { b1, b2, b3} = num2;
console.log(b3);

const no = {
  a0:[0,1,2,3,4,5],
  a2:[2,3,4,5],
  a3:[0,2,3,4],
  a4:[0,1,3,5],
  a5:[0,1,3,4],
}

console.log(no['a1']);
const {a0,a4} = no;
console.log(a0);
console.log(a0[2]);