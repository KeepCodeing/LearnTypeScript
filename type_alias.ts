// use key word type can alias a type, just like typedef...

// type pos: string = '1' | '2';
type pos = '1' | 2 | '3' | 4;

let t: pos = '1';

interface IPerson {
  name: string;
  age: number;
}

// this is another 'union type', use symbol & can dynamic add property
// to interface or other type, it's like implement
type P = IPerson & { gender: string };

let per: P = { name: 'hwz', age: 20, gender: 'male' };

console.log(per);

