let string="nitin";
let rev=" ";
for(let i=string.length-1;i>=0;i--){
rev+=string[i];
}
if(string==rev){
console.log("is palindrome")
}
else{
console.log("is not palindrome")
}