 //Primitives vs Object
  //undefined,null,number,boolean,string,simple
    ///primritives r immutable  
    
 //crreating objects   
// 1st way
    const o = new Object()
    o.firstName= "gokul"
    o.lastName="nath"
    o.greet = function(){
        console.log('hi')
    }


//2nd way object literal
const o2 = {}
o2.firstName = "gokul"
02['lastName'] = "nath"
const key ="is teaching"
o[key]="true"


//3rd way
const o3 = {
    firstName: 'gokul',
    lastName: "nath",
    greet: function(){
        console.log('hi')
    },

}



//nesting of object
const o4 = {
    firstName: 'gokul',
    lastName: "nath",
    greet: function(){
        console.log('hi')
    },
    address: {
        street: 'dfdf',
        number: 123,

    },
}
 console.log(o4.address.number)
  console.log(o4.address)
  console.log(o4)
  console.log(o3.firstName)
  console.log(o3.greet())
  console.log(typeof o4.address)


 

