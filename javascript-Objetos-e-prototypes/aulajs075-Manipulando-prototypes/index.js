// new Object -> Object.prototype 
const objA = {
    chaveA : 'A'
};

const objB = {
    chaveB : 'A'
    // _proto_: objA
};

Object.setPrototypeOf(objB, objA);

console.log(objB.chaveB)