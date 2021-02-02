function getInput(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}

const result1=getInput();

console.log(result1());
console.log(result1());
console.log(result1());

const result2=getInput();

console.log(result2());
console.log(result2());
console.log(result1());
console.log(result2());
console.log(result1());

