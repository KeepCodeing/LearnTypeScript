// functions of TypeScript:
// thanks of the rules of property declare in TypeScript, now JavaScript
// or called "TS" can declare functions just like c language or c++ language.
// in ts, functions are more like other static type language(forgive my spell
// mistakes, I'm not good at English), it should describe the input arguments'
// type and the output arguments' type

let fun = (x: number, y: number): number => x + y;

fun(1, 2);

interface ISum {
    (x: number, y: number, z?: number): number;
}

const add = (x: number, y: number, z?: number): number => z ? x + y + z : x + y;

// using interface with function you can crate a "needed complete function"
// in your programs
let myAdd: ISum;

myAdd = add;

myAdd(1, 2, 3);

