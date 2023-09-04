const color ={
  title:'red',
  sample:'apple',
  no:123
}
console.log(color);
//  일반적이 객체 -> JSON,TEXT화

const str = JSON.stringify(color);
console.log(str);
console.log(str.sample);

//  JSON -> 일반적이 값, 객체 변경 -> javascript 매서드, 작업
const obj = JSON.parse(str);
console.log(obj);
console.log(obj.sample);