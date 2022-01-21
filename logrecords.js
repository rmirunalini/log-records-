var readline=require('readline-sync');
fs = require('fs')
function divide(x,y)
{
if(y==0)
throw new Error('can not divide by Zero');
else
d=x/y;
console.log("Division is ",d);
fs.writeFileSync('Division.txt',d.toString());
}
//handle the code which throws exception
function add(x,y){
let a=x+y;
fs.writeFileSync('Addition.txt',a.toString());
console.log("Addition is ",a);
}
function sub(x,y){
let b=x-y;
console.log("Substraction is",b);
fs.writeFileSync('Subtraction.txt',b.toString());
}
function mul(x,y){
let c=x*y;
console.log("Multiplication is",c);
fs.writeFileSync('Multiplication.txt',c.toString());

}





console.log('Taking inputs from user');



var a=parseInt(readline.question("Enter the 1st number:"));
var b=parseInt(readline.question("Enter the 2nd number:"));
add(a,b);
sub(a,b);
mul(a,b);
try {
divide(a,b);
} catch (err) {
fs.writeFileSync('error.txt',err.toString());
console.log("Error ocerd:"+err);



}