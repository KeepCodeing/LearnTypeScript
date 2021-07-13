// union types can declare a property like tuple, you can describe one more
// types of it and you can only declare one of the type you have described...
// it's a confuse type when you using it to declare a union property like
// number and string, case those property is not all have same function or
// other things, who cares..

let u: number | string = '111';

// so it's why I think union types is confusing in some times
// in this price of program I used the key word "typeof", in
// TS, this key word name type guard. you can differentiate
// types of property by using this key word
const computeLength = (u: number | string):
    number => typeof u === "number" ? u.toString().length : u.length;

console.log(computeLength(u));

// this is union type too and I think it's more usable than the other.
let pos: 'L' | 'R' | 'D' | 'W';
