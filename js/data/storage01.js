localStorage.setItem('book','javscript');

const color = {
  title : 'red',
  sample:'apple',
  no:['no01','no02']
}

//  color -> 'color'
// localStorage.setItem('color',color)
const str = JSON.stringify(color);
console.log(str);
localStorage.setItem('color',str);


//  get
const obj = localStorage.getItem('book');
console.log(obj);

const obj2  = localStorage.getItem('color');
// console.log(obj2);
// console.log(obj2.sample);
const obj3 = JSON.parse(obj2);
console.log(obj3);
console.log(obj3.sample);