const o = {
    a: 'a',
    b: 'b',
}
const o2=o     //shallow copy
o.a = "new value"   //Mutation
console.log(o2.a)   //ans is "new value"




//Another way
const o3 ={
    a:"a",
    b:"b",
    obj:{
        key:"key"
    }
} 
const o4=o3     //shallow copy
o3.obj.key="new vvalue"
console.log(o4.obj.key)    //ans "new vvalue"




//  Deep copy
function deepCopy(obj){
    //check if the values r objects
    //if so, copy that objects(deep copy)
    //else return the value
    const keys = Object.keys(obj)
    const newObject = {}
    for(let i = 0;i<keys.length;i++){
        if(typeof obj[keys[i]]==='objects'){
            newObjects[keys]=deepCopy(obj[key])
        }else{
            newObject[key] = obj[key]
        }
    }
    return newObject
}
const o5 = deepcopy(o3)
//o3.obj.key = 'new key'
console.log(o5.obj.key)

