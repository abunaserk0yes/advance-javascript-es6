const student=[
    {id:1,name:"kayes"},
    {id:2,name:"aziz"},
    {id:3,name:"ridoy"},
    {id:4,name:"rudro"}
] ;

const Name=student.map(s=>s.name);
// console.log(Name);
const id=student.filter(s=>s.id>1);
// console.log(id);
const oneId=student.find(s=>s.id>2);
// console.log(oneId);

const array=[];

for (let i = 0; i < student.length; i++) {
    const element = student[i];
    const newEle=element.name;
    array.push(newEle);
    
}
//  console.log(array);