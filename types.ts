let str : string = 'hello world';
let num : number = 114514;
let und : undefined = null;

let nl : null = undefined;

let arr : Array<Number> = [1, 2, 3, 4];
let arr1 : number[] = [11, 22];

// wrong:
// tuple1 : [string, number] = ['hello', 'hhh'] types must match
// tuple1 : [string, number] = ['hello'] args must match
// tuple1.push(true) can only push the type one of the tuple list
let tuple1 : [string, number] = ['hello', 111];
tuple1.push('hhh');

let bool : boolean = false;

let ay : any = 1;
ay = 'hhh';
ay = {};

interface IPerson {
    name: string,
    age: number
}
// partial can make all property unnecessary
type IPartial = Partial<IPerson>;
let p: IPartial = { name: 'hwz' };
// omit can delete a property
type IOmit = Omit<IPerson, 'age'>;
let per: IOmit = { name: 'hwz' };
