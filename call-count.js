const countFile = require('./count-fun');

let foo = () =>{
    console.log(countFile.countFun('nn'))
}

foo();
foo();

console.log(countFile.countFun('nn'))