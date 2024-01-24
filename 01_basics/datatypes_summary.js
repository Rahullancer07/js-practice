// Primitive -- call by value

// 7 types -- String , Number , Boolean , null , undefined , Symbol , BigInt

const dataString = "Rahul";
const dataNumber = 33;
const dataBool = false;
const dataNull = null;
const dataUndefined = undefined;
const dataSymbol = Symbol('1234');
const dataBigInt = 32342329129n;

// console.table([[dataString, typeof dataString] , [dataNumber, typeof dataNumber] , [dataBool, typeof dataBool] , [dataNull, typeof dataNull] , [dataUndefined, typeof dataUndefined], [dataSymbol, typeof dataSymbol], [dataBigInt, typeof dataBigInt]]);

/*
|    0    │   'Rahul'    │  'string'   │
│    1    │      33      │  'number'   │
│    2    │    false     │  'boolean'  │
│    3    │     null     │  'object'   │
│    4    │  undefined   │ 'undefined' │
│    5    │ Symbol(1234) │  'symbol'   │
│    6    │ 32342329129n │  'bigint'   │
*/

// Reference Datatype (Non-primitive)

// Arrays , object , function

const heroes = ["IronMan" , "SuperMan", "Batman" , "Me"];

const student = {
    name : "Rahul",
    age : "23",
}

const func = function(){
    console.log("Hello, from function");
}

// console.table([[heroes, typeof heroes], [student, typeof student],[func , typeof func]]);

/* 
│ 0 │ [ 'IronMan', 'SuperMan', ...] │ 'object'   │
│ 1 │ { name: 'Rahul', age: '23' }  │ 'object'   │
│ 2 │ [Function: func]              │ 'function' │
*/