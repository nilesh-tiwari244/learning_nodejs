const a=require('./2-intro');
require('./mindgrenade')
const funt=require("./trialmod");
funt();
console.log(a.singleperson,a.items);
const john = 'john'
const ab={
    name:"hello",
    roo:"B15",
    age:25,
    male:true
}
const peter ='peter'
const sayHi= (name)=> {
console.log('Hello there',{name});
}
sayHi( 'susan' )
sayHi(john)
sayHi(peter)
console.log({ab,john});
console.log(ab,john);
