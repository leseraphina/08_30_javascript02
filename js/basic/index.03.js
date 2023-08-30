const book = {
  title:'javascript',
  type:'it'
}
const {title,level=0} = book;
console.log(title);
console.log(level);

//  키의 변경

const str = title;
console.log(str);
console.log(title);

const graphic = {
  no: 'painkt',
  title2:'photoshop'
}
const  {no:art,title2} = graphic;
console.log(art);
// console.log(no);