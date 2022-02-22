const thisaconst=45
//thisaconst++// error
const obj ={}
obj.a="a"//no problem bcoz the ref was not changed



let thisisalet =51
thisisalet = 50
let thisisalet 51//errroe



var thisisvar = 50
thisisvar = 51
var thisisvar = 51///no problem in all
//called shadowing as if the other one does not exist
console.log(thisisavar)//ans is "undefined"
//"called hoisting " means takes the definition of something and hoists it to the top of the file
//vars ,function definition are hoisted meens the function can be called @ the top of the file
// but the const cannot be console.loged@ the top
//availabilty of constants r null untill they r declared
let thisisnot hoisted = function(){
    console.log('fjfmff')

}//if this is called @ the top error of hoist


//but
var thiishois = function (){
    console.log('kdkndv')

}//iif thos is called it is a "type error"bcoz the var exists but it is still undefined so when we call it like a function 
//it is a type error



//why r these happening bcoz js read the entiere file,function definition r saved in memeory
// variable initialization will be declare but r not initialised
// 2nd phase when the code is actually runned (const and all those)




//another way to initialise
thisisalsoavvariabble = "hello"
//just installed globally not used 

